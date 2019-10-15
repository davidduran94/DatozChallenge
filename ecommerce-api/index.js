const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', (req, res) => {
    res.send('hello');
});


app.listen(config.port, () => {
    console.log(`App runnning on port ${config.port}`);
});