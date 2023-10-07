require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const {addEmail, sendMessage, routeHandling} = require('./controller/news');
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

app.use(bodyParser.urlencoded({ extended: false }))       
app.use(bodyParser.json())       

app.post('/get-news-letter', addEmail);
app.post('/send-message', sendMessage);
app.get('/produk', showProduk);
// app.use('/', routeHandling);