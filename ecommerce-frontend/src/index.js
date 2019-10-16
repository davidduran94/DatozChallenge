import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';


const initialState  = { 
    storeList:[
        { 
            id: 1,
            name:'Kichink' ,
            type: "store",
            url: 'https://www.kichink.com/',
            cover: 'https://pbs.twimg.com/profile_images/1082317236121915393/D0ZNwfcn_400x400.jpg'
        },
        {
            id: 2,
            type: "store",
            name:'AMZ' ,
            cover: 'https://d39w7f4ix9f5s9.cloudfront.net/90/9c/51ab07474da3a6da25292fcc0826/amazon-logo-orgsmile.svg'
        }
    ],
    products:[
        {
            id: 1457234,
            name:'Kichink' ,
            type:'',
            url: 'https://www.kichink.com/',
            cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
            title: 'Chamarra negra',
            description: 'Chamarra para hombre en paño de lana',
            price: 450,

        },
        {
          id: 214234,
          name:'Kichink' ,
          type:'',
          url: 'https://www.kichink.com/',
          cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
          title: 'Chamarra negra',
          description: 'Chamarra para hombre en paño de lana',
          price: 450,

      },
      {
        id: 149234,
        name:'Kichink' ,
        type:'',
        url: 'https://www.kichink.com/',
        cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
        title: 'Chamarra negra',
        description: 'Chamarra para hombre en paño de lana',
        price: 450,

    },
    {
      id: 142934,
      name:'Kichink' ,
      type:'',
      url: 'https://www.kichink.com/',
      cover: 'https://s3.amazonaws.com/img2-kichink/items_2096958_100728_0_20190207183922_b.jpg',
      title: 'Chamarra negra',
      description: 'Chamarra para hombre en paño de lana',
      price: 450,

  }

    ],
    productsFavs:[

    ]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app')
);