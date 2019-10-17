const express = require('express');
const ProductsService = require('../services/products');
const ScrapperService = require('../services/scrapper');


function ecommerceApi (app) {
    const router = express.Router();
    app.use('/products/', router);

    // Inyeccion de servicios
    const productsService = new ProductsService();
    const scrapperService = new ScrapperService();

    /**
     * Generacion de nuevos productos por tipo de tienda
     */
    router.get('/generate/:store', async function(req, res, next){
        try{
            const store = req.params.store;
            if(store.length > 0){
                let gene = await scrapperService.generareProducts(store);
                res.status(200).json({
                    data: gene,
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


    router.get('/:store', async function(req, res, next){
        try{
            const store = req.params.store;
            if(store.length > 0){
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

