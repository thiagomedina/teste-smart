import React from 'react'
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Buttons, Table } from './styles'

const ProductCard = ({ prod }) => {
    return (
        <Container>
            {console.log(prod)}
            <Table>
                <span><strong>Nome: </strong>{prod.name}</span>
                <span><strong>Descrição: </strong>{prod.description}</span>
                <span><strong>Valor: </strong>{prod.value}</span>
                <span><strong>Vencimento: </strong>12/12/2021</span>

            </Table>
            <Buttons>
                <button type="button">
                    <Link to="">
                        <FiEdit2 />
                    </Link>
                </button>
                <button
                    type="button">
                    <FiTrash2 />
                </button>
            </Buttons>

        </Container>
    )
}

export default ProductCard