const dbPool = require('../config/database');

const getAllEmail = ()=>{
    const SQLQuery = 'SELECT * FROM getnews';

    return dbPool.execute(SQLQuery);
}

const addEmail = (body) =>{
    const SQLQuery = `INSERT INTO getnews (email) VALUES ('${body.email}')`;
    
    return dbPool.execute(SQLQuery);
}

const sendMessage = (body) =>{
    const SQLQuery = `INSERT INTO message (name, email, subject, message) 
                        VALUES ('${body.name}', '${body.email}', '${body.subject}',  '${body.message}')`;
    
    return dbPool.execute(SQLQuery);
}

module.exports = {getAllEmail, addEmail, sendMessage}
