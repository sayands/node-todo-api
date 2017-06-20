//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDB server');
    
//    db.collection('ToDos').insertOne({
//        text : 'Something to Do',
//        completed : false
//    }, (err, result) => {
//       if(err){
//           return console.log('Unable to insert Todo', err);
//       }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
//    db.collection('Users').insertOne({
//        name : 'Sayan',
//        age : 19,
//        location : 'Kolkata'
//    }, (err, result) => {
//       if(err){
//           return console.log('Unable To Insert Todo', err);
//       }
//        console.log(result.ops[0]._id.getTimestamp());
//    });
    
    
    
    db.close();
});