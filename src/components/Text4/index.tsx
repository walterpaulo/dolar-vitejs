import React from 'react';
import { Container } from './style';

export interface ITextProps{
    children: string;
}

function Text4(prop: ITextProps) {
    return (
        <Container>
            {prop.children}
        </Container>
    );
}

export default Text4;