import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Product from '../containers/Product';
import Layout from '../components/Layout';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;