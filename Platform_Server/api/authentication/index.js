const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
const models = require('../../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config/config');
const verifyToken = require('./verify-token');
const Speakeasy = require("speakeasy");
const { optValidateTime } = require('../../config/config').development;

// const customerService = require('../services/customer.service');

/**
 * Database associations
 */
// models.UserMaster.removeAttribute('id');

router.post('/register', function (request, response) {

    const { CustomerDetails, CartDetails } = request.body;
    let customerDetails = {};

    // create a token
    const token = jwt.sign({ UserId: CustomerDetails.EmailId }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
    });

    saveUser(CustomerDetails).then((user) => {

        const [userData, wasCreated] = user;

        if (!wasCreated && CustomerDetails.Role != 'customer') {
            return response.status(403).send({
                message: "User already exist"
            });
        }

        if (CustomerDetails.Role === 'customer') {
            customerDetails = data;
            CartDetails.CustomerId = data.CustomerId;
            CartDetails.StatusId = 15;
        }

        // return CustomerDetails.Role === 'customer' ? customerService.registerCustomer(CustomerDetails) : '';
        return cartService.addProductInCart(CartDetails);
    }).then(data => {

        response.status(200).send({
            auth: true,
            token: token,
            message: 'User Registered successfully and Product added in cart',
            customer: customerDetails
        });
    }).catch(error => {
        console.log('Error in User registration', error);

        return response.status(500).send({
            message: "There was a problem registering the user.",
            error: error
        });
    });
});

