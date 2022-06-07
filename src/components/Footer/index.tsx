import React from 'react';
import { Container, Span } from './style';

function Footer() {
    return (
        <Container>
            <Span>&#169; 2022. Website Designed by <a href='https://wwww.walterpaulo.com.br' target="_blank">Walter Paulo</a></Span>
            <Span className='accessCod'>&#10;<a href='https://github.com/walterpaulo/dolar-vitejs' target='_blank'>&amp;&#32;código fonte&#32;</a></Span>
        </Container>        
    );
}

export default Footer;