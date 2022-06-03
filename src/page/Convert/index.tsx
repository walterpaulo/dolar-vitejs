import React from 'react';
import Text4 from '../../components/Text4';
import { BoxConvert, Container, ItemReal, Operador } from './style';

function Convert() {
    return (
        <Container>
                Converter
            <BoxConvert>
                <ItemReal>
                <Text4>Insira valor em real</Text4>
                    <input type="text"/>
                </ItemReal>
                <Operador>x</Operador>
                <ItemReal>
                    <Text4>
                         Valor atual do dolar
                    </Text4>
                    <div>4,75</div>
                </ItemReal>
                <Operador>=</Operador>
                <ItemReal>
                <Text4>Resultado</Text4>
                    <div>47,50</div>
                </ItemReal>
            </BoxConvert>
        </Container>
    );
}

export default Convert;