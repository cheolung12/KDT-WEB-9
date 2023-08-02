const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('practice');
});

app.get('/axios', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});