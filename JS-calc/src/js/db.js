const MongoClient = require('mongodb').MongoClient,
      assert = require('assert');

const url='mongodb://localhost:27017/testdb'

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log("Connected successfully to the server");

  db.close()
});
