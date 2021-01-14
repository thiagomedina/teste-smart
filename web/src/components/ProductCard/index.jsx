import React from 'react'
import moment from 'moment'
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Buttons, Table } from './styles'

const ProductCard = ({ prod }) => {
    const date = moment(prod.deadline).format('DD/MM/YYYY')
    return (
        <Container>
            <Table>
                <span><strong>Nome: </strong>{prod.name}</span>
                <span><strong>Descrição: </strong>{prod.description}</span>
                <span><strong>Valor: </strong>{prod.value}</span>
                <span><strong>Vencimento: </strong>{date}</span>
            </Table>
            <Buttons>
                <button type="button">
                    <Link to={`/register/${prod._id}`}>
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