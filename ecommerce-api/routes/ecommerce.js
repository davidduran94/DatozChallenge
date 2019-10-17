const express = require('express');
const ProductsService = require('../services/products');
const FavoritesService = require('../services/favorites');
const ScrapperService = require('../services/scrapper');


function ecommerceApi (app) {
    const router = express.Router();
    app.use('/products/', router);

    // Inyeccion de servicios
    const productsService = new ProductsService();
    const favoritesService = new FavoritesService();
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
                res.status(500).json({
                    data: [],
                    message: 'error'
                });
            }
        } catch(err){
            next(err);
        }
    });


    router.get('/favorites', async function(req, res, next){
        try{
            console.log("searching...");
            let favs = await favoritesService.getFavorites();
            favs.length > 0 ? (
                res.status(200).json({
                    data: favs,
                    message: 'sucddcess'
                })
            ) : (
                res.status(503).json({
                    data: [],
                    message: 'no data'
                })
            )
        } catch(err){
            res.status(500).json({
                data: [],
                message: 'error'
            });
            next(err);
        }
    });

    router.post('/favorites', async function(req, res, next){
        try{
            let favs = await favoritesService.getFavorites();
            res.status(200).json({
                data: favs,
                message: 'success'
            });
        } catch(err){
            res.status(500).json({
                data: [],
                message: 'error'
            });
            next(err);
        }
    });

    router.delete('/favorites/:id', async function(req, res, next){
        try{
            let favs = await favoritesService.deleteFavById(req.params.id);
            res.status(200).json({
                data: favs,
                message: 'success'
            });
        } catch(err){
            res.status(503).json({
                data: [],
                message: 'no data available'
            });
            next(err);
        }
    });


}

module.exports = ecommerceApi;
