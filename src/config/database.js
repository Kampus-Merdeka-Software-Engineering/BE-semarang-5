const mysql = require('mysql2');
// Create the connection pool. The pool-specific settings are the defaults
const dbPool = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.PORT
});

// module.exports = dbPool.promise();
module.exports = {dbPool};
// module.exports = dbPool.promise();


// coba squelize 
/*
module.exports =  {
    HOST: 'localhost',
    USER:  'root',
    PASSWORD: '',
    DATABASE: 'company_profile',
    DIALECT: 'mysql'
}
*/