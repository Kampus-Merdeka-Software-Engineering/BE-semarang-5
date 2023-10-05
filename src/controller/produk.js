const dbConfig = require('../config/database');

// const getAllEmail = async (req, res) =>{
//     try {
//         const [data] = await newsModel.getAllEmail();
//     res.json({
//         message: 'GET all email success',
//         data: data
//     })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }

const showProduk = async (req, res)=>{
    const {body} = req;
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