module.exports = {
  development: {
    username: "root",
    password: "root",
    database: "task",
    host: "localhost",
    dialect: "mysql",
    optValidateTime: 120,
    migrationStorage: "json",
    migrationStoragePath: "sequelizeMeta.json",
    migrationStorageTableName: "sequelize_meta",    
  },
  test: {
    username: "root",
    password: "root",
    database: "task",
    host: "localhost",
    dialect: "mysql"
  },
  production: {
    username: "root",
    password: "root",
    database: "task",
    host: "localhost",
    dialect: "mysql"
  }, 

  

  apiUrl: '',
  SMSAPIConfiguration: {
    apiUrl: 'https://instantalerts.co/api/web/send',
    senderID: 'MEDOTR',
    apiKey: '61437j34htc6y3nc17065636901qpi6phz2'

  },
  
}
