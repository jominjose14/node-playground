const { MongoClient, ObjectId } = require('mongodb-legacy');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error) {
        return console.log('Unable to connect to database!', error);
    }

    const db = client.db(databaseName);

    db.collection('tasks').updateMany({ completed: false }, {
        $set: {
            completed: true
        }
    })
    .then(console.log)
    .catch(console.error);
});