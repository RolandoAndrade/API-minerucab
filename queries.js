const {Client}  = require('pg');

const connectionData = {
    user: 'postgres',
    host: 'localhost',
    database: 'minerucabPruebas',
    password: '1',
    port: 5432,
};
const client = new Client(connectionData);
client.connect();
function getUsers(req, res, next)
{
    client.query('SELECT * FROM minerales')
        .then(function (data)
        {
            res.status(200)
                .json({
                    status: 'success',
                    data: data.rows,
                });
        }
            //client.end()
        )
        .catch(err => {
            return next();
            //client.end()
        });
}

module.exports={
    getUsers: getUsers
};
