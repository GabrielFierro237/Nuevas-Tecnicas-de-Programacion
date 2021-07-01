const { MongoClient } = require("mongodb");
const { MongoConnection } = require("../lib/Mongo");

const COLLECTION = "clients";

const findUsers = () =>
  new Promise(async (resolve, reject) => {
    //inicializa mongoclient para que retorne la configuracion de la db
    try {
      const DB = await MongoConnection();
      const collection = DB.collection(COLLECTION);
      const clientList = await collection.find({}).toArray();
      resolve(clientList);
    } catch (error) {
      reject(error);
    }
  });

module.exports = {
  findUsers,
};
