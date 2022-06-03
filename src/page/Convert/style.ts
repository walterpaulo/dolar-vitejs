import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #141414;
`

export const BoxConvert = styled.div`
    display: flex;
    align-items: flex-end;
    height: 100%;
    border: 1px solid var(--color-white-clear);
    background-color: var(--container-bg-primary);
    padding: 15px 30px;
    gap: 40px;
    margin-top: 10px;
`
export const ItemReal  = styled.div`
    display: block;
    background-color: var(--container-bg-primary);

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
