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
            message: 'Email has been sent',    
            data : body
        })
        // res.redirect('back');
        
    } catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
};

const sendMessage = async (req, res)=>{
    const {body} = req;
    try{
        await newsModel.sendMessage(body);
        res.status(201).json({
            message: 'Message has been sent',    
            data : body
        });
        // res.redirect('back');
    } catch(error){
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
};

const homePage = (req, res) => {
    res.render('index', {
        title: 'ClickCart | Home',
        layout: 'layouts/main-layout',
    });
};

const aboutPage = (req, res) => {
    res.render('about', {
        title: 'ClickCart | About',
        layout: 'layouts/main-layout',
    });
}

const contactPage = (req, res) => {
    res.render('contact', {
        title: 'ClickCart | Contact',
        layout: 'layouts/main-layout',
    });
};

const routeHandling = (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
}

module.exports = {addEmail, sendMessage, contactPage, aboutPage, homePage, routeHandling};