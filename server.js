//console.log("Yahou");
const express = require("express");
const app = express();

app.use(logger);

//app.use(express.static("public"));

app.get("/", (req, res) => {
  //console.log('here');
  //res.sendStatus(500).send('HIII');
  //res.status(500).send('HI')
  //res.status(404).json({Message:"hhiiii"});
  //res.send('Hi');
  //res.download('server.js')
  app.set("view engine", "ejs");
  res.render("index", { text: "world" });
});
const userRouter=require("./routes/users");
app.use('/users',userRouter)


function logger(req, res, next) {
console.log(req.originalUrl);
next();


}

app.listen(3000);
