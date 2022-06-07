import React, { useEffect, useState } from 'react';
import Text4 from '../../components/Text4';
import { AbaBox, BoxConvert, BoxInput, Container, ErrorNumber, ItemReal, Operador, TextBoxtResult } from './style';

import { api, IDolar } from '../../services/dolorapi';

function Convert() {

    const [dolar, setDolar] = useState<IDolar>()
    const [result, setResult] = useState<number>(0)
    const [valor, setValor] = useState<number>(0)
    const [isError, setIsErro ] = useState(false)

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
        document.title = "Converter Dólar "
            setResult(parseFloat(dolar?.low || "0")* valor)
          getRepos()
          
    },[dolar, valor, handleOnChange, isError])

    function handleOnChange(e: any){
        let valorInput = e.target.value
        if (!isNumber(valorInput) || valorInput < 0 ) {
            setValor(0)
            setIsErro(true)
        } else {
            setValor(valorInput)
            setIsErro(false)
        }
      }

      function isNumber(n: string) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    console.log(isError)
    return (
        <Container>
                <AbaBox>Converter</AbaBox>
            <BoxConvert>
                <ItemReal>
                    <Text4>Insira valor em real</Text4>
                    <BoxInput><input type="text" min={1} max={4} onChange={handleOnChange}/></BoxInput>
                    <ErrorNumber isError={isError}>* Informe números!</ErrorNumber>
                    </ItemReal>
                <Operador className='operMult'>x</Operador>
                <ItemReal>
                    <Text4>
                         Valor atual do dolar
                    </Text4>
                    <TextBoxtResult>US$ {dolar?.low.substr(0,4)}</TextBoxtResult>
                </ItemReal>
                <Operador className='operResul'>=</Operador>
                <ItemReal>
                    <Text4>Resultado</Text4>
                    <TextBoxtResult>R$ {result.toFixed(2)}</TextBoxtResult>
                </ItemReal>
            </BoxConvert>
        </Container>
    );
}

export default Convert;