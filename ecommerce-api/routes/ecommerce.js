const express = require('express');
const { mockEcommerce } = require('../utils/mocks/ecommerces');


function ecommerceApi (app) {
    const router = express.Router();
    app.use('/api/ecommerces', router);

    router.get('/', async function(req, res, next){
        try{
            const stores = await Promise.resolve(mockEcommerce);
            res.status(200).json({
                data: stores,
                message: 'success'
            });
        } catch(err){
            next(err);
        }
    });
}

module.exports = ecommerceApi;

