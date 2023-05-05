const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.post('/',(req, res) => {

  res.send('Create User')
});

router.get('/:id',(req, res) => {
req.params.id;
res.send(`Get user with Id: ${req.params.id}`)
})

module.exports=router