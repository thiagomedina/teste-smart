import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import { Creators as ProductActions } from '../../store/ducks/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment'

import getValidationErrors from "../../utils/getValidationErrors";
import { Container, Form, Button, ErrorMessage, Load } from './styles'
import loadSvg from '../../assets/load.svg'
const ProductFormContainer = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [deadline, setDeadline] = useState();
    const [inputError, setInputError] = useState('');

    const loading = useSelector(state => state.Product.loading)
    const prod = useSelector(state => state.Product.data)

    useEffect(() => {
        if (id) {
            const productToEdit = prod.filter((obj) => obj._id === id);
            setName(productToEdit[0]?.name)
            setDescription(productToEdit[0]?.description)
            setValue(productToEdit[0]?.value)
            setDeadline(moment(productToEdit[0]?.deadline).format('YYYY-MM-DD'))
        }
    }, []);


    const handleRegisterProduct = async (event) => {
        event.preventDefault()
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome Obrigatório'),
                description: Yup.string().required('Descrição Obrigatória'),
                value: Yup.number().required().typeError('O valor deve ser em números'),
                deadline: Yup.date().required().typeError('Data Obrigatória')
            })

            let data = { name, description, value, deadline }

            await schema.validate(data, {
                abortEarly: false,
            });
            setInputError('')

            id ?
                dispatch(ProductActions.updateProduct({...data, id}))
                : dispatch(ProductActions.addProduct(data))


        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                setInputError(errors)
            }
        }
    }

    return (
        <Container>
            <fieldset>
                <h1>Dados do produto</h1>
                <Form onSubmit={handleRegisterProduct}>
                    <label>Nome:</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Nome"
                    />
                    <ErrorMessage> {inputError.name && inputError.name} </ErrorMessage>
                    <label>Descrição:</label>
                    <input
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"
                    />
                    <ErrorMessage> {inputError.description && inputError.description} </ErrorMessage>
                    <label>Valor:</label>
                    <input
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor"
                    />
                    <ErrorMessage> {inputError.value && inputError.value} </ErrorMessage>
                    <label>Vencimento:</label>
                    <input
                        type='date'
                        defaultValue={deadline}
                        onChange={e => setDeadline(e.target.value)}
                        placeholder="Vencimento"
                    />
                    <ErrorMessage> {inputError.deadline && inputError.deadline} </ErrorMessage>
                </Form>
                {loading ?
                    <Load><img src={loadSvg} alt="" /></Load>
                    : <Button type="submit" onClick={handleRegisterProduct}>Salvar</Button>}
            </fieldset>
        </Container>
    )
}

export default ProductFormContainer