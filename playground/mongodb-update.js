//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDB server');
    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("5947ea5e9f37451e18608ead")
    }, { 
         $set : {
             name : 'Sayan'
         },
        $inc : {
            age : +1
        }
       }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
    

    //db.close();
});