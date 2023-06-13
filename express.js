const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render('pages/home')
});
app.get('/home', (req, res) => {
    res.render('pages/home')
});
app.get('/resume', (req, res) => {
    res.render('pages/resume')
});
app.get('/projects', (req, res) => {
    res.render('pages/projects')
});
app.get('/contact', (req, res) => {
    res.render('pages/contact')
});
app.get('/buisness', (req, res) => {
    res.render('pages/buisness')
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

