import React, { useState } from 'react'
import * as Yup from "yup";
import { Creators as ProductActions } from '../../store/ducks/Product';
import { useDispatch, useSelector } from 'react-redux';

import getValidationErrors from "../../utils/getValidationErrors";
import { Container, Form, Button, ErrorMessage } from './styles'

const ProductFormContainer = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [deadline, setDeadline] = useState('');
    const [inputError, setInputError] = useState('');

    const loading = useSelector(state => state.Product)

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
            dispatch(ProductActions.addProduct(data))
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
                        id="name"
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
                        value={deadline}
                        onChange={e => setDeadline(e.target.value)}
                        placeholder="Vencimento"
                    />
                    <ErrorMessage> {inputError.deadline && inputError.deadline} </ErrorMessage>
                </Form>
                <Button type="submit" onClick={handleRegisterProduct}>Salvar</Button>
            </fieldset>
        </Container>
    )
}

export default ProductFormContainer