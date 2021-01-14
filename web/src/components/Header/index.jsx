
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Links } from './styles';

const Header = () => {
    return (
        <Container>
            <Links>
                <Link to="/">
                    Cadastrar Produto
            </Link>
                <Link to="/">
                    Lista de Produtos
            </Link>
            </Links>
        </Container>
    );
};

export default Header;