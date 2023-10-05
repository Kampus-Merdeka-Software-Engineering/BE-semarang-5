require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const {addEmail, sendMessage, homePage, routeHandling} = require('./controller/news');
const {showProduk} = require('./controller/produk');
const bodyParser = require('body-parser');
const database = require('./config/database');
database.dbPool.connect( (error) =>{
    if(error){
        console.log('database connection error');
    } else {
        console.log('database connected');
        app.listen(PORT, ()=>{
            console.log(`start listening port ${PORT} ...`);
        });
    }
})


// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))             // parse application/x-www-form-urlencoded 
app.use(bodyParser.json())              // parse application/json 

app.post('/get-news-letter', addEmail);
app.post('/send-message', sendMessage);

//  get
app.get('/produk', showProduk);

app.use('/', routeHandling);

// app.listen(PORT, ()=>{
//     console.log(`start listening port ${PORT} ...`);
// });