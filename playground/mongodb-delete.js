//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDB server');
    
    
    //deleteMany
//    db.collection('ToDos').deleteMany({text:'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    //deleteOne
//    db.collection('ToDos').deleteOne({text:'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    //findOneAndDelete
//    db.collection('ToDos').findOneAndDelete({completed : false}).then((result) => {
//        console.log(result);
//    });
//    db.collection('Users').deleteMany({name : 'Sayan'}).then((result) => {
//        console.log(result);
//    });
    db.collection('Users').findOneAndDelete({ _id : new ObjectID("5947eacbe3a6d404c0f97376")}).then((result) => {
       console.log(result); 
    });

    //db.close();
});