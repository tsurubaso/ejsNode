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

/*
router.get('/:id',(req, res) => {
//req.params.id;
//always put static routes above
res.send(`Get user with Id: ${req.params.id}`)
})
*/
const users = [{name:"bla"},{name:"blub"}];
router.param("id", (req, res, next, id) => {
req.user=users[id];
next();
})

router.route("/:id")
.get((req, res) => {
  console.log(req.user);
  res.send('1')})
.put((req, res) => {res.send('2')})
.delete((req, res) => {res.send('3')})




module.exports=router