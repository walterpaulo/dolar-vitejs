import React, { useEffect, useState } from 'react';
import Text4 from '../../components/Text4';
import { AbaBox, BoxConvert, BoxInput, Container, ErrorNumber, ItemReal, Operador, TextBoxtResult } from './style';

import { api, IDolar } from '../../services/dolorapi';

function Convert() {

    const [dolar, setDolar] = useState<IDolar>()
    const [result, setResult] = useState(0)
    const [valor, setValor] = useState();

    useEffect(()=>{
        async function getRepos() {
            try {
              const response = await api;
              const resDolar = response.data.USD
               setDolar(resDolar)
            } catch (error) {
                console.error(error);
            }
        }
          getRepos()
          
    },[dolar, valor, handleOnChange])

    function handleOnChange(e: any){    
      } 
      console.log(valor)

    return (
        <Container>
                <AbaBox>Converter</AbaBox>
            <BoxConvert>
                <ItemReal>
                    <Text4>Insira valor em real</Text4>
                    <BoxInput><input type="number" id='id' value={valor} onInput={e => setValor(e.target.value)}/></BoxInput>
                    <ErrorNumber>* Informe números!</ErrorNumber>
                    </ItemReal>
                <Operador>x</Operador>
                <ItemReal>
                    <Text4>
                         Valor atual do dolar
                    </Text4>
                    <TextBoxtResult>US$ {dolar?.low.substr(0,4)}</TextBoxtResult>
                </ItemReal>
                <Operador>=</Operador>
                <ItemReal>
                    <Text4>Resultado</Text4>
                    <TextBoxtResult>R$ {result}</TextBoxtResult>
                </ItemReal>
            </BoxConvert>
        </Container>
    );
}

export default Convert;