import styled from "styled-components";

export const Container = styled.div`
    height: 228px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 14px;

    @media (max-width: 454px) {
        margin-left: 15px;
        img{
            width: 25%;
        }
    }
`