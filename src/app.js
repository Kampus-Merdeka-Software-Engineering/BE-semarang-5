const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const newsController = require('./controller/news');
const bodyParser = require('body-parser')

app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))             // parse application/x-www-form-urlencoded 
app.use(bodyParser.json())              // parse application/json 

app.get('/', newsController.homePage);
app.get('/about', newsController.aboutPage);
app.get('/contact', newsController.contactPage);
app.post('/get-news-letter', newsController.addEmail);
app.post('/send-message', newsController.sendMessage);

app.listen(4000, ()=>{
    console.log(`start listening port 4000 ...`);
});