const { mockEcommerce } = require('../utils/mocks/ecommerces');
const ProductsService = require('../services/products');

const request = require("request");
const cheerio = require("cheerio");

class ScrapperService {

    async scrappDataKichink() {

        const productsService = new ProductsService();

        request({ method:'GET', url:mockEcommerce[0].url }, 
        (error, response, data) => {
          if (error) return console.error(error);

          const $ = cheerio.load(data);
          
            // se buscan divs de tipo articulo
            const urlElems = $('div.card-articulo')

            // We now loop through all the elements found
            for (let i = 0; i < urlElems.length; i++) {
                // To get all span elements with the `s1` class that are contained inside the
                // element contains the URL)
                const urlSpan = $(urlElems[i]).find('div.content')[0]
                const urlimageData = $(urlSpan).find('strong.title')[0]
                const urlimageData2 = $(urlimageData).find('a.link-to-product')[0] 
                // We proceed, only if the element exists
                if (urlSpan) {
                    // and use the `text` method to get only the text (ignoring the HTML)
                    const title = $(urlimageData2).text()

                    const imageElem = $(urlElems[i]).find('img.img-responsive')[0]
                    const imageUri = $(imageElem).attr('src');
                    const priceData = $(urlSpan).find('strong.price')[0]
                    const price = $(priceData).text();

                    //let stores = await productsService.createProduct(store);


                    // We then print the text on to the console
                    console.log(imageUri)
                    console.log(title)
                    console.log(price)
                    console.log("-------------------------------------")
                }
            }               
        }
        );
    }


    async scrappDataML() {

        const productsService = new ProductsService();

        request({ method:'GET', url:mockEcommerce[1].url }, 
        (error, response, data) => {
          if (error) return console.error(error);

          const $ = cheerio.load(data);
          
            // se buscan divs de tipo articulo
            const urlElems = $('a.ui-item')
            console.log("found:" + urlElems.length);
            // We now loop through all the elements found
            for (let i = 0; i < urlElems.length; i++) {
                // To get all span elements with the `s1` class that are contained inside the
                // element contains the URL)
                const urlSpan = $(urlElems[i]).find('div.ui-item__image-container')[0];
                const urlimageData = $(urlSpan).find('img.ui-item__image')[0];
                const data = $(urlElems[i]).find('div.ui-item__content')[0];
                const dataPrice = $(data).find('div.ui-item__price-block')[0];
                const dataPrice2 = $(dataPrice).find('span.price-tag.ui-item__price')[0];
                const dataPrice3 = $(dataPrice2).find('span.price-tag-fraction')[0];
                //const data = 

                if (urlSpan) {
                    // and use the `text` method to get only the text (ignoring the HTML)
                    const imageUri = $(urlimageData).attr('src')
                    const price = $(dataPrice3).text();
                    const titleData = $(data).find('p.ui-item__title')[0];
                    const title = $(titleData).text();

                    //let stores = await productsService.createProduct(store);


                    // We then print the text on to the console
                    console.log(imageUri);
                    console.log(title);
                    console.log(price);
                    console.log("-------------------------------------");
                }
            }               
        }
        );
      }

    /**
     * Genera con scrapping los productos nuevos
     */
    async generareProducts(ecommerce){
        const stores = [];
        switch (ecommerce){
            case 'Kichink':
                await this.scrappDataKichink()
            break;
            case 'ML':
                console.log("scarapping ml");
                await this.scrappDataML()
            break;
        }

       
        return stores || [];
    }


}

module.exports = ScrapperService;