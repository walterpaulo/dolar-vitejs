import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

export const Span = styled.span`
    margin-top: 10px;
    text-align: center;

    @media (max-width: 454px) {
        font-size: 10px;
        padding: 15px 15px;
    }
`