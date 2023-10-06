const dbConfig = require('../config/database');

const showProduk = async (req, res)=>{
    const produk = `SELECT * FROM produk;`
    dbConfig.dbPool.query(produk, (error, result)=>{
        if(error){
            res.status(500).json({
                message: 'Server Error',
                serverMessage: error,
            })
        } else{
            res.status(201).json({
                message: 'success',    
                data : result
            })
        }
    })
};

module.exports = {showProduk};