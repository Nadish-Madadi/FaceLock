const getMongoDB = require("./src/backend/db/mongodb.js");

let database;
try {
  database = getMongoDB();
  console.log("Connected to MongoDB.");
} catch (e) {
  console.log(`Failed to connect to MongoDB.\n\n${e}`)
}

/*
data example:
{
    user: USERNAME,
    frames: [
        (a list of images in binary form)
    ]
}
*/
function saveImage(data) {
    const collection = database.collection("faces");
    collection.insertOne(data);
};

module.exports = saveImage;