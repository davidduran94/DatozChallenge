const express = require('express');
const cors = require("cors");

const app = express();
//configuracion de dominios permitidos para acceder a API
//const corsOptions = { origin: "http://mipage.com" };
app.use(cors());

const { config } = require('./config/index');
const ecommerceApi = require('./routes/ecommerce.js')

ecommerceApi(app);


app.listen(config.port, () => {
    console.log(`App runnning on port ${config.port}`);
});