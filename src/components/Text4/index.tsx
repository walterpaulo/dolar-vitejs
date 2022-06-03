import React from 'react';
import { ITextProps } from '../../types/ITextProps';
import { Container } from './style';

function Text4(prop: ITextProps) {
    return (
        <Container>
            {prop.children}
        </Container>
    );
}

export default Text4;