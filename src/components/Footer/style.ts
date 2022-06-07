import styled from 'styled-components';

export const Container = styled.div`
    height: 50px;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const Span = styled.span`
    margin-top: 10px;
    text-align: center;
    
    
    @media (max-width: 454px) {
        font-size: 10px;
        padding-top: 15px;
        &:is(.accessCod){
            padding: 0 15px;
        }
    }
`