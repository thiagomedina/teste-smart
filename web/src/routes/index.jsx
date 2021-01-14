
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from '../view/ProductList';
import ProductRegister from '../view/ProductRegister'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ProductList} />
            <Route path="/register" exact component={ProductRegister} />
        </BrowserRouter>
    );
}

export default Routes;