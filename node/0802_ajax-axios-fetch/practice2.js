const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("practice2");
});

app.post("/axios", (req, res) => {
  const correctId = "cheolung";
  const correctPw = "1234";
  const { userID, userPW } = req.body;
  if (userID === correctId && userPW === correctPw) {
    res.send(true);
  } else {
    res.send(false);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
