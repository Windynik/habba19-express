const mysql = require('mysql');
const util = require('util');

const dbName = 'habba19';

const config = {
    "development": {
        "port": 1337,
        "database": {
            host: "localhost",
            user: "root",
            password: "password",
            database: dbName
        }
    },
    "production": {
        "port": 3000,
        "database": {
            host: process.env.DB_HOST,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: dbName
        }
    }
}

config.conn = mysql.createPool(config[process.env.NODE_ENV].database);
config.conn.query = util.promisify(config.conn.query);
config.initDB = async () => {
    try {
        await config.conn.query('USE habba19');
        console.log('db initialized')
    } catch (e) {
        console.log(e)
    }
}
module.exports = config;
