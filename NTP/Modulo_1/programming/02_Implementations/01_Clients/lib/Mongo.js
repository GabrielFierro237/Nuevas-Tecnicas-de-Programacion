const { MongoClient } = require("mongodb");

const DB_NAME = "clients";
const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@modulo-1.2f8pa.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

var MongoConnection = () =>
  new Promise(async (resolve, reject) => {
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
