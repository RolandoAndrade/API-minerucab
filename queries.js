const promise = require('bluebird');

const initOptions = {
    promiseLib: promise,
    error(error, e) {
        if (e.cn) {
            // A connection-related error;
            //
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

async function getUsers(req, res, next)
{
    try
    {
        const data = await client.query('SELECT * FROM minerales');
        res.status(200).json({
                status: 'success',
                data: data,
            });
        // success
    }
    catch (e)
    {
        console.log(e.message);
        res.status(500).json({
            status: 'error',
            message: e.message
        });
        console.log(e);
        // error
    }
}

module.exports={
    getUsers: getUsers
};
