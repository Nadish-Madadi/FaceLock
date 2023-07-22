const { MongoClient } = require("mongodb");
const { dbPassword } = require("../../../config.json");

const client = new MongoClient(dbPassword);

function getMongoDB() {
  return client.db("facelock");
}

module.exports = getMongoDB;