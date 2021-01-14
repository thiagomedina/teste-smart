import React from 'react'
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Buttons, Table } from './styles'

const ProductCard = () => {
    return (
        <Container>

            <Table>
                <strong>Nome: nono</strong>

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