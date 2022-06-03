import React from 'react';
import Text3 from '../Text3';
import { Container } from './style';

function Header() {
    return (
        <Container>
            <Text3>Dólar hoje</Text3>
            <img src='icon-dolarcofre.png' />
        </Container>
    );
}

export default Header;