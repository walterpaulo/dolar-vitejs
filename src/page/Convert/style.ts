import styled from "styled-components";

type TDisplay = {
    isError: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--container-bg-secundary);
    max-width: 800px;
`

export const AbaBox = styled.div`
    background-color: var(--container-bg-primary);
    width: 100px;
    text-align: center;
    padding: 10px;
    border-radius: 0px 10px 0px 0px;
`

export const BoxConvert = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    /* border: 1px solid var(--color-white-clear); */
    background-color: var(--container-bg-primary);
    padding: 15px 30px;
    gap: 40px;
    padding-bottom: 20px;
`
export const ItemReal  = styled.div`
    display: block;
    background-color: var(--container-bg-primary);
    min-height: 95px;
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
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px 10px;
    background-color: var(--color-white);
    text-align: center;
    font-size: 15px;

    :hover{
        overflow: visible;
    }

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
export const ErrorNumber = styled.div<TDisplay>`
    display: ${props => props.isError ? "flex" : "none"};
    font-size: 12px;
    color: var(--color-red);

    background-color: var(--container-bg-primary);

`
