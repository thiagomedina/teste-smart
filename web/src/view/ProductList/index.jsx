import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import { Creators as ProductActions } from '../../store/ducks/Product';


import { Content } from './styles'
const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.Product?.data)

    useEffect(() => {
        dispatch(ProductActions.getProduct())
    }, [dispatch])


    return (
        <>
            <Header />
            <Content>
                <h1>Produtos Cadastrados</h1>
                {products && products.map(item => <ProductCard prod={item} />)}
            </Content>
        </>
    )
}

export default ProductList