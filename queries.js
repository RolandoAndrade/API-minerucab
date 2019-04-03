const promise = require('bluebird');

const initOptions = {
    promiseLib: promise,
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};

const pgp = require('pg-promise')(initOptions);

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'minerucabPruebas',
    password: '1',
    port: 5432,
};
const client = pgp(connectionData);


const User = require('./queries/user');
const userManager=new User(client);


module.exports={
    getUsers: userManager.getUsers.bind(userManager)
};
