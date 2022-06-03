import React from 'react';
import Text4 from '../../components/Text4';
import { AbaBox, BoxConvert, BoxInput, Container, ErrorNumber, ItemReal, Operador, TextBoxtResult } from './style';

function Convert() {
    return (
        <Container>
                <AbaBox>Converter</AbaBox>
            <BoxConvert>
                <ItemReal>
                    <Text4>Insira valor em real</Text4>
                    <BoxInput><input type="number" /></BoxInput>
                    <ErrorNumber>* Informe números!</ErrorNumber>
                    </ItemReal>
                <Operador>x</Operador>
                <ItemReal>
                    <Text4>
                         Valor atual do dolar
                    </Text4>
                    <TextBoxtResult>4,75</TextBoxtResult>
                </ItemReal>
                <Operador>=</Operador>
                <ItemReal>
                    <Text4>Resultado</Text4>
                    <TextBoxtResult>47,50</TextBoxtResult>
                </ItemReal>
            </BoxConvert>
        </Container>
    );
}

export default Convert;