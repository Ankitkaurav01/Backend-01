var express = require('express');
var router = express.Router();
const UserTodo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/todos', async(req, res)=>{
  const todos = await UserTodo.find();
  res.render('todos', {todos});
});

router.post('/createTodo', async(req,res) => {
  const {name , email , description , status} = req.body;
 const todo = await UserTodo.create({
  name,
  email,
  description,
  status
 });
 res.redirect("/todos");
});

router.get('/deleteTodo/:id', async (req,res) => {
 const todo = await UserTodo.findByIdAndDelete({_id : req.params.id});
 res.redirect('/todos');
});

module.exports = router;
