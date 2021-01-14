import React from 'react'
import moment from 'moment'
import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Creators as ProductActions } from '../../store/ducks/Product';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Buttons, Table } from './styles'

const ProductCard = ({ prod }) => {
    const dispatch = useDispatch();
    const date = moment(prod.deadline).utc().format('DD/MM/YYYY')

    const handleDelete = () => {
        dispatch(ProductActions.removeProduct(prod._id))
    }
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
                <button onClick={handleDelete}
                    type="button">
                    <FiTrash2 />
                </button>
            </Buttons>

        </Container>
    )
}

export default ProductCard