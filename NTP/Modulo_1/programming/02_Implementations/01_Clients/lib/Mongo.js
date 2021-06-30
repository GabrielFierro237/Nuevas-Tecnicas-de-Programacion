const { MongoClient } = require("mongodb");

const DD_NAME = "clients";
const URL = "mongodb+srv://gabrielandro12:<password>@modulo-1.2f8pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var MongoConnection = () =>
  new Promise((resolve, reject) => {
    try {
      let client = new MongoClient(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();
      let db = client.db(DB_NAME);
      resolve(db);
    } catch (error) {
      reject(error);
    }
  });

module.exports.MongoConnection = MongoConnection;
