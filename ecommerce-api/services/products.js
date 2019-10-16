const { mockEcommerce } = require('../utils/mocks/ecommerces');
const { mockProds } = require('../utils/mocks/products');

class ProductsService {

    /**
     * Genera con scrapping los productos nuevos
     */
    async generareProducts(ecommerce){
        const stores = await Promise.resolve(mockEcommerce[0]);
        return stores || [];
    }

    /**
     * Obtiene 10 nuevos productos del store solicitado
     */
    async getProducts(ecommerce){
        const stores = await Promise.resolve(mockProds.filter(
            item => item.name == ecommerce));
        return stores || [];
    }

    /**
     * Obtiene el  producto solicitado por ID
     */
    async getProduct(id){
        const stores = await Promise.resolve(mockProds.filter(
            item => item.id == id));
        return stores || [];
    }

    /**
     * crea un nuevo producto en BD
     */
    async createProduct(product){

    }

    /**
     * Solo puede ser actualizado el precio
     */
    async updateProduct(id, price){

    }



}

module.exports = ProductsService;