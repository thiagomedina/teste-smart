import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import Load from '../../components/Load'
import { Creators as ProductActions } from '../../store/ducks/Product';


import { Content } from './styles'
const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.Product?.data)
    const loading = useSelector(state => state.Product.loading)

    useEffect(() => {
        dispatch(ProductActions.getProduct())
    }, [dispatch])



    return (
        <>
            <Header />
            <Content>
                <h1>Produtos Cadastrados</h1>
                {loading && <Load />}
            
                {products ?  products.map(item => <ProductCard key={item.id} prod={item} />) :
                    <h2>Nenhum produto cadastrado...</h2>}

            </Content>
        </>
    )
}

export default ProductList