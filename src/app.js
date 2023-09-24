const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const newsController = require('./controller/news');

app.set('views', 'src/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(express.json())

// app.get('/', newsController.getAllEmail);
app.get('/', (req, res) => {
    res.render('index', {
        title: 'ClickCart | Home',
        layout: 'layouts/main-layout',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'ClickCart | About',
        layout: 'layouts/main-layout',
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'ClickCart | Contact',
        layout: 'layouts/main-layout',
    });
});

app.post('/get-news-letter', newsController.addEmail);

app.listen(4000, ()=>{
    console.log(`start listening port 4000 ...`);
});