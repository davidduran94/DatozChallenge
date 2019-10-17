const { MongoClient, ObjectID } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;


/**
 * Clase utilizada para el manejo de la conexion a BD
 * y ejecucion de scripts sobre los documentos
 */
class MongoLib {
    constructor() {
      this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
      this.dbName = DB_NAME;
    }
    
    /**
     * Uso del patron singleton para manejar una
     * sola instancia de conexion a la BD 
     */
    connect() {
      if (!MongoLib.connection) {
        MongoLib.connection = new Promise((resolve, reject) => {
          this.client.connect(err => {
            if (err) {
              reject(err);
            }
            console.log('Connected succesfully to mongo');
            resolve(this.client.db(this.dbName));
          });
        });
      }
  
      return MongoLib.connection;
    }

    /**
     * Obtiene todos los elementos de la coleccion
     * @param {*} collection 
     * @param {*} query 
     */
    getAll(collection, query) {
        return this.connect().then(db => {
          return db
            .collection(collection)
            .find(query)
            .toArray();
        });
    }

    /**
     * Obtiene un elemento de la coleccion por ID
     * @param {*} collection 
     * @param {*} id 
     */
    get(collection, id) {
        return this.connect().then(db => {
          return db.collection(collection).findOne({ _id: ObjectId(id) });
        });
      }
    
    /**
     * Crea un nuevo documento en la coleccion
     * @param {*} collection 
     * @param {*} data 
     */
    create(collection, data) {
        return this.connect()
        .then(db => {
                return db.collection(collection).insertOne(data);
            })
        .then(result => result.insertedId);
    }

    /**
     * Actualiza el documetno con el ID y SOLO la data
     * que se envia en el parametro 
     * @param {*} collection 
     * @param {*} id 
     * @param {*} data 
     */
    update(collection, id, data) {
    return this.connect()
        .then(db => {
        return db
            .collection(collection)
            .updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
        })
        .then(result => result.upsertedId || id);
    }

    /**
     * Elimina un documento de la coleccion
     * @param {*} collection 
     * @param {*} id 
     */
    delete(collection, id) {
    return this.connect()
        .then(db => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
        })
        .then(() => id);
    }

}
  
module.exports = MongoLib;