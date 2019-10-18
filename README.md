# DatozChallenge

Prueba técnica de Datoz consiste en una aplicación web la cual es capaz de hacer web-scrapping a los ecommerce mercadolibre y kichink, con la finalidad de obtener un catalogo de sus productos. 

## Frontend React & Redux
Dentro de el directorio ecommerce-frontend usar node package manager [npm](https://www.npmjs.com/) para iniciar la aplicación.
```bash
npm install
npm run start
```


## Backend NodeJS & Express
Dentro de el directorio ecommerce-api usar node package manager [npm](https://www.npmjs.com/) para levantar el servidor.

```bash
npm install 
npm run start
```
## Tests Backend

Dentro de el directorio ecommerce-api usar node package manager [npm](https://www.npmjs.com/) para correr los test

```bash
npm install 
npm test
```

## BD Mongo
Dentro del directorio DB se encuentra la estructura de las colecciones de mongo necesarias para guardar los datos de los productos

```bash
DB_Name: datoz_scrapp_db 
Collection_Products_Example: {
     "_id" : ObjectId("5da7c48949af5c62398e43f5"), 
    "name" : "ML", 
    "type" : "", 
    "url" : "https://www.mercadolibre.com.mx/", 
    "cover" : "https://http2.mlstatic.com/D_Q_NP_750455-MLM31913531630_082019-AB.jpg", 
    "title" : "Refrigerador Automático 251.19 L Mabe - Rma1025xmxe1", 
    "description" : "Refrigerador Automático 251.19 L Mabe - Rma1025xmxe1", 
    "price" : "5,999"
}

```

## Examples
![alt text](https://github.com/davidduran94/DatozChallenge/blob/Development/ecommerce-frontend/public/examples/img1.png)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)