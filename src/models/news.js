const dbPool = require('../config/database');

const getAllEmail = ()=>{
    const SQLQuery = 'SELECT * FROM getnews';

    return dbPool.execute(SQLQuery);
}
const addEmail = (body) =>{
    const SQLQuery = `INSERT INTO getnews (email) VALUES ('${body.email}')`;
    
    return dbPool.execute(SQLQuery);
}

module.exports = {getAllEmail, addEmail}
