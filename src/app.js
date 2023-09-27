const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const {addEmail, sendMessage, contactPage, aboutPage, homePage} = require('./controller/news');
const bodyParser = require('body-parser');

app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))             // parse application/x-www-form-urlencoded 
app.use(bodyParser.json())              // parse application/json 

app.get('/', homePage);
app.get('/about', aboutPage);
app.get('/contact', contactPage);
app.post('/get-news-letter', addEmail);
app.post('/send-message', sendMessage);

app.listen(4000, ()=>{
    console.log(`start listening port 4000 ...`);
});