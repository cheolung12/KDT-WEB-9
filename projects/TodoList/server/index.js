const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 8000;
const db = require('./models');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//CORS오류방지
app.use(cors());

// router
const todoRouter = require('./routes/todo');
app.use('/todo', todoRouter);

db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
});


