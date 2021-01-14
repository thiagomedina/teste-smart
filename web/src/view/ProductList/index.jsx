import React from 'react'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'

import { Content } from './styles'
const ProductList = () => {
    return (
        <>
            <Header />
            <Content>
                <ProductCard />
            </Content>
        </>
    )
}

export default ProductList