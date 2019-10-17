import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


const initialState  = { 
    storeList:[
        { 
            _id: "1",
            name:'Kichink' ,
            type: "store",
            url: 'https://www.kichink.com/',
            cover: 'https://pbs.twimg.com/profile_images/1082317236121915393/D0ZNwfcn_400x400.jpg'
        },
        {
            _id: "2",
            type: "store",
            name:'ML' ,
            cover: 'https://static.mlstatic.com/org-img/homesnw/img/ml-logo.png?v=3.0'
        }
    ],
    productsList:[],
    products: [],
    productsFavs:[]
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('app')
);