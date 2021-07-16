// //CRUD
// const mongodb = require('mongodb');

// //Define Client
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')

const id = new ObjectID()
console.log(id);

//Define MongoDB variables
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//Connect MongoDB and Perform operations
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    ///Single Insert
    // db.collection('users').insertOne({
    //     name: 'Banu',
    //     age: 28
    // }, (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert user');
    //     console.log(result.ops);
    // })

    ///InsertMany
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 30
    //     },
    //     {
    //         name: 'Mike',
    //         age: 36
    //     }
    // ], (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert documents');
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Do your home work.',
    //         completed: false
    //     },
    //     {
    //         description: 'Play games.',
    //         completed: true
    //     },
    //     {
    //         description: 'Watch movies.',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error)
    //         return console.log('Unable to insert to decuments.');
    //     console.log(result.ops);
    // })

    // db.collection('users').findOne({
    //     _id: new ObjectID("60e46fec9fa71153c8629a6e"),
    // }, (error, user) => {
    //     if (error)
    //         return console.log('Unable to fetch to document.');
    //     console.log(user);
    // })

    // db.collection('users').find({ age: 30 }).count((error, count) => {
    //     if (error)
    //         return console.log('Unable to fetch to document.');
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID('60e474233cb1644f501f868d') }, (error, result) => {
    //     console.log(result);
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })

    // db.collection('users').update({ _id: new ObjectID('60e463ddec66293a40368100') }, {
    //     $set: {
    //         name: 'Andrew'
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.error(error);
    // })

    // db.collection('tasks').updateMany({ completed: false }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({ age: 30 }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').deleteOne({
    //     _id: new ObjectID('60e474233cb1644f501f868d')
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

})