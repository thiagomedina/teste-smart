import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

import { Content } from './styles'
const ProductList = () => {
    return (
        <>
            <Header />
            <Content>
                <h1>Produtos Cadastrados</h1>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Content>
        </>
    )
}

export default ProductList