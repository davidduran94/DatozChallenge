const express = require('express');
const app = express();

const { config } = require('./config/index');
const ecommerceApi = require('./routes/ecommerce.js')

ecommerceApi(app);


app.listen(config.port, () => {
    console.log(`App runnning on port ${config.port}`);
});