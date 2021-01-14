
import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => {
    return (
        <Container>
            <Link to="/">
                Cadastrar Produto
            </Link>
            <Link to="/">
                Lista de Produtos
            </Link>
        </Container>
    );
};

export default Header;