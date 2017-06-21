const {ObjectID} =require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5948d5b8ab2858f837ae6d66";
//
//if(!ObjectID.isValid(id)){
//    console.log('ID not valid');
//}

//ToDo.find({
//    _id : id
//}).then((todos) =>{
//    console.log('Todos', todos);
//});
//
//ToDo.findOne({
//    _id : id
//}).then((todo) =>{
//    console.log('Todo', todo);
//});

//ToDo.findById(id).then((todo) =>{
//    if(!todo){
//        return console.log('Id not found');
//    }
//    console.log('Todo By ID', todo);
//}).catch((e) => console.log(e));

User.findById(id).then((user) =>{
    if(!user){
        return console.log('User not found');
    }
    console.log(JSON.stringify(user,undefined,2));
}, (e) => {
   console.log(e); 
});