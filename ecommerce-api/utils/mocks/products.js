const mockProds = [
  {
    "_id": "5da7c48949af5c62398e43f5",
    "name": "ML",
    "type": "",
    "url": "https://www.mercadolibre.com.mx/",
    "cover": "https://http2.mlstatic.com/D_Q_NP_750455-MLM31913531630_082019-AB.jpg",
    "title": "Refrigerador Automático 251.19 L Mabe - Rma1025xmxe1",
    "description": "Refrigerador Automático 251.19 L Mabe - Rma1025xmxe1",
    "price": "5,999"
},
{
    "_id": "5da7c48949af5c62398e43f7",
    "name": "ML",
    "type": "",
    "url": "https://www.mercadolibre.com.mx/",
    "cover": "https://http2.mlstatic.com/D_Q_NP_851632-MLM31369505298_072019-AB.jpg",
    "title": "Reloj Timex Tw2p62300 Con Perfume Nautica Envio Gratis",
    "description": "Reloj Timex Tw2p62300 Con Perfume Nautica Envio Gratis",
    "price": "1,499"
},
{
    "_id": "5da7c48949af5c62398e43f6",
    "name": "ML",
    "type": "",
    "url": "https://www.mercadolibre.com.mx/",
    "cover": "https://http2.mlstatic.com/D_Q_NP_997396-MLM31232374444_062019-AB.jpg",
    "title": "Colección De Tés Zen Tea De 5 Sabores Con 150 Sobres",
    "description": "Colección De Tés Zen Tea De 5 Sabores Con 150 Sobres",
    "price": "175"
},
{
    "_id": "5da7c48949af5c62398e43f9",
    "name": "ML",
    "type": "",
    "url": "https://www.mercadolibre.com.mx/",
    "cover": "https://http2.mlstatic.com/D_Q_NP_796425-MLM31523162603_072019-AB.jpg",
    "title": "Caja Fuerte Electrónica Para Notebook - 22,5 Litros - Klatter",
    "description": "Caja Fuerte Electrónica Para Notebook - 22,5 Litros - Klatter",
    "price": "1,199"
},
{
  "_id": "5da7c80852ea7463b1081c42",
  "name": "Kichink",
  "type": "",
  "url": "https://www.kichink.com/",
  "cover": "https://s3.amazonaws.com/kichink/items_2328048_419559_0_20190919162953_b.jpg",
  "title": "Pin Noche",
  "description": "Pin Noche",
  "price": "$190.00 MXN"
},
{
  "_id": "5da7c80852ea7463b1081c43",
  "name": "Kichink",
  "type": "",
  "url": "https://www.kichink.com/",
  "cover": "https://s3.amazonaws.com/kichink/items_2091528_377823_0_20190204133237_b.jpg",
  "title": "DARK SOULS",
  "description": "DARK SOULS",
  "price": "$149.00 MXN"
},
{
  "_id": "5da7c80852ea7463b1081c44",
  "name": "Kichink",
  "type": "",
  "url": "https://www.kichink.com/",
  "cover": "https://s3.amazonaws.com/kichink/items_2327819_419559_0_20190919134527_b.jpg",
  "title": "Pin Mañana",
  "description": "Pin Mañana",
  "price": "$190.00 MXN"
},
{
  "_id": "5da7c80852ea7463b1081c45",
  "name": "Kichink",
  "type": "",
  "url": "https://www.kichink.com/",
  "cover": "https://s3.amazonaws.com/kichink/items_2239322_53139_0_20190618091736_b.jpg",
  "title": "La Gusana Ciega- Borregos En La Niebla 12\"",
  "description": "La Gusana Ciega- Borregos En La Niebla 12\"",
  "price": "$450.00 MXN"
}
];

class ProductsServiceMock {
  async getProducts(store) {
    return Promise.resolve(mockProds.filter(item => item.name==store))
  }

  async createProduct() {
    return Promise.resolve(mockProds[0]);
  }

}


function filteredProducts(tag){
  return mockProds.filter(prod => prod.name.includes(tag))
}

module.exports = { 
    mockProds ,
    filteredProducts,
    ProductsServiceMock
};
