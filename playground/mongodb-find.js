//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDB server');
    
//   db.collection('ToDos').find({
//       _id : new ObjectID("5947e9996a318523cc12a753")
//      }).toArray().then((docs) => {
//       console.log('Todos');
//       console.log(JSON.stringify(docs,undefined,2));
//   }, (err) => {
//       console.log('Unable to fetch Todos ',err);
//   });
    
//     db.collection('ToDos').find().count().then((count) => {
//       console.log(`Todos count : ${count}`);
//   }, (err) => {
//       console.log('Unable to fetch Todos ',err);
//   });
    db.collection('Users').find({name : 'Sayan'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
        
    }, (err) => {
        console.log('Unable to fetch users ',err);
    });
    //db.close();
});