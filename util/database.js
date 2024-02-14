const mySql = require('mysql2');

const pool = mySql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'nodeintro'
});

module.exports = pool.promise();