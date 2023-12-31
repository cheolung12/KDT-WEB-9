const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/ajax', (req, res) => {
    console.log('back-ajax', req.query);
    res.send(req.query);    
});

app.post('/ajax', (req, res) => {
    console.log('back-ajax', req.body);
    res.send(req.body);    
});

app.get('/axios', (req, res) => {
    console.log('back-axios', req.query);
    res.send(req.query); 
});

app.post('/axios', (req, res) => {
    console.log('back-axios', req.body);
    res.send(req.body); 
});

app.get('/fetch', (req, res)=>{
    console.log('back-fetch', req.query);
    res.send(req.query); 
});
app.post('/fetch', (req, res) => {
    console.log('back-fetch', req.body);
    res.send(req.body); 
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});