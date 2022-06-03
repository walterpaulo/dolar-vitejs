import React from 'react';
import { BoxConvert, Container, ItemReal, Operador } from './style';

function Convert() {
    return (
        <Container>
                Converter
            <BoxConvert>
                <ItemReal>
                    <h4>Insira valor em real</h4>
                    <input type="text"/>
                </ItemReal>
                <Operador>x</Operador>
                <ItemReal>
                    <h4>Valor atual do dolar</h4>
                    <div>4,75</div>
                </ItemReal>
                <Operador>=</Operador>
                <ItemReal>
                    <h4>Resultado</h4>
                    <div>47,50</div>
                </ItemReal>
            </BoxConvert>
        </Container>
    );
}

export default Convert;