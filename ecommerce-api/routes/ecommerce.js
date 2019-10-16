const express = require('express');
const ProductsService = require('../services/products');
const ScrapperService = require('../services/scrapper');


function ecommerceApi (app) {
    const router = express.Router();
    app.use('/sources/', router);

    // Inyeccion de servicios
    const productsService = new ProductsService();
    const scrapperService = new ScrapperService();

    router.get('/:store/products', async function(req, res, next){
        try{
            const store = req.params.store;
            if(store.length > 0){
                let gene = await scrapperService.generareProducts(store);
                let stores = await productsService.getProducts(store);
                res.status(200).json({
                    data: stores,
                    message: 'success'
                });
                
            }else{
                res.status(503).json({
                    data: [],
                    message: 'no data available'
                });
            }
        } catch(err){
            next(err);
        }
    });
}

module.exports = ecommerceApi;

