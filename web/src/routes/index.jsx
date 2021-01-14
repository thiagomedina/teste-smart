
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import ProductList from '../view/ProductList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ProductList} />
        </BrowserRouter>
    );
}

export default Routes;