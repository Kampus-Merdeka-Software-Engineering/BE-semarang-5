const newsModel = require('../models/news');

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
const addEmail = async (req, res)=>{
    const {body} = req;
    try{
        await newsModel.addEmail(body);
        res.status(201).json({
            message: 'CREATE new user success',    
            data : body
        });
    } catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
};

module.exports = {addEmail};