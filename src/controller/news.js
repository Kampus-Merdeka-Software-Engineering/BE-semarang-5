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
const addEmail = async (req, res)=>{
    const {body} = req;
    // try{
    //     await newsModel.addEmail(body);
    //     res.status(201).json({
    //         message: 'Email has been sent',    
    //         data : body
    //     })
    //     // res.redirect('back');
        
    // } catch(error){
    //     res.status(500).json({
    //         message: 'Server Error',
    //         serverMessage: error,
    //     })
    // }
    const addEmail = `INSERT INTO getnews (email) VALUES ('${body.email}');`
    dbConfig.dbPool.query(addEmail, (error, result)=>{
        if(error){
            res.status(500).json({
                message: 'Server Error',
                serverMessage: error,
            })
        } else{
            res.status(201).json({
                message: 'Email has been sent',    
                data : body
            })
        }
    })
};

const sendMessage = async (req, res)=>{
    const {body} = req;
    // try{
    //     await newsModel.sendMessage(body);
    //     res.status(201).json({
    //         message: 'Message has been sent',    
    //         data : body
    //     });
    //     // res.redirect('back');
    // } catch(error){
    //     res.status(500).json({
    //         message: 'Server Error',
    //         serverMessage: error,
    //     })
    // }

    const message = `INSERT INTO message (name, email, subject, message) 
    VALUES ('${body.name}', '${body.email}', '${body.subject}',  '${body.message}')`;
    dbConfig.dbPool.query(message, (error, result)=>{
        if(error){
            res.status(500).json({
                message: 'Server Error',
                serverMessage: error,
            })
        } else{
            res.status(201).json({
                message: 'Email has been sent',    
                data : body
            })
        }
    })
};

const routeHandling = (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
}

module.exports = {addEmail, sendMessage, routeHandling};