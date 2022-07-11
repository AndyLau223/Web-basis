const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('blog'); // get a specific database.
}

function getDb() {
  if (!database) {
    throw { message: 'Database connection is not established!' };
  }
  return database;
}

module.exports = {
  connectToDataBase: connect,
  getDb: getDb,
};
