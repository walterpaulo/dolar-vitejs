import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #141414;
    max-width: 800px;
`

export const BoxConvert = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    border: 1px solid var(--color-white-clear);
    background-color: var(--container-bg-primary);
    padding: 15px 30px;
    gap: 40px;
    margin-top: 10px;
    padding-bottom: 20px;
`
export const ItemReal  = styled.div`
    display: block;
    background-color: var(--container-bg-primary);
    height: 95px;
    & h4 {
        margin-bottom: 10px;
        background-color: var(--container-bg-primary);
    }
`
export const Operador = styled.div`
    background-color: var(--container-bg-primary);
    font-size: 20px;
    font-weight: 700;
`

export const TextBoxtResult = styled.div`
    width: 80px;
    padding: 10px 20px;
    background-color: var(--color-white);
    text-align: center;

`

export const BoxInput = styled.div`
    background-color: var(--container-bg-primary);
    input{
        width: 80px;
        padding: 10px 20px;
        border: none;
        background-color: var(--color-white);
        -moz-appearance: textfield;
        appearance: textfield;
        border-color: transparent;
        margin-bottom: 5px;
    }
`
export const ErrorNumber = styled.div`
    /* display: none; */
    font-size: 12px;
    color: var(--color-red);

    background-color: var(--container-bg-primary);

`
