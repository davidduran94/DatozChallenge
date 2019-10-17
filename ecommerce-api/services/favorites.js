const MongoLib  = require('../lib/mongo');


class FavoritesService {
    constructor(){
        this.collection = 'favorites';
        this.mongoDB = new MongoLib();
    }


    /**
     * Obtiene nuevos productos del store solicitado
     */
    async getFavorites(){
        const nameStore = ["ML", "Kichink"]; 
        const query = name && { name: { $in: nameStore }};
        const prods =  this.mongoDB.getAll(this.collection, query);
        return prods || [];
    }

    /**
     * Obtiene el  producto solicitado por ID
     */
    async getFavorite({id}){
        const prod = await this.mongoDB.get(this.collection, id);
        return prod || [];
    }

    /**
     * crea un nuevo favorito en BD
     */
    async createFavorite(product){
        const createdProdId = await this.mongoDB.create(this.collection, product);
        return createdProdId;
    }


    /** 
     * Elimina elemento de la coleccion 
     * */
    async deleteFavoriteById( ID ) {
        const deletedDataId = awaitthis.mongoDB.delete(this.collection, ID);
        return deletedDataId;
    }


}

module.exports = FavoritesService;