import React, { useEffect, useState } from 'react';
import Text4 from '../../components/Text4';
import { AbaBox, BoxConvert, BoxInput, Container, ErrorNumber, ItemReal, Operador, TextBoxtResult } from './style';

import { api, IDolar } from '../../services/dolorapi';

function Convert() {

    const [dolar, setDolar] = useState<IDolar>()
    const [result, setResult] = useState<number>(0)
    const [valor, setValor] = useState<number>(0);
    const [isErrorMessage, setErrorMessage] = useState(false)

    const setMessagemError = () => setErrorMessage(!isErrorMessage)

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
            setResult(parseFloat(dolar?.low || "0")* valor)
          getRepos()
          
    },[dolar, valor, handleOnChange])

    function handleOnChange(e: any){
        let valorInput = e.target.value
        !isNumber(valorInput)?
            setValor(0)
            : setValor(valorInput)
        
      }

      function isNumber(n: string) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    console.log(isErrorMessage)
    return (
        <Container>
                <AbaBox>Converter</AbaBox>
            <BoxConvert>
                <ItemReal>
                    <Text4>Insira valor em real</Text4>
                    <BoxInput><input type="text" onChange={handleOnChange}/></BoxInput>
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
                    <TextBoxtResult>R$ {result.toPrecision(3)}</TextBoxtResult>
                </ItemReal>
            </BoxConvert>
        </Container>
    );
}

export default Convert;