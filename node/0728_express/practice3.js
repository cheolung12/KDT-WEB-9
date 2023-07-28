
const express = require("express");

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
    res.render('gugudan', {
        number: [1,2,3,4,5,6,7,8,9]
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
