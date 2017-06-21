const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//ToDo.remove({}).then((result) => {
//   console.log(result); 
//});

//ToDo.findOneAndRemove()
//ToDo.findByIdAndRemove()

ToDo.findOneAndRemove({_id : "594a7dca53e36ed1a1ff106b"}).then((todo) =>{
    console.log(todo);
});

ToDo.findByIdAndRemove("594a7dca53e36ed1a1ff106b").then((todo) => {
    console.log(todo);
});