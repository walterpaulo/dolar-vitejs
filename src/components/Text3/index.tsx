import React from 'react';
import { ITextProps } from '../../types/ITextProps';
import { H3 } from './style';

function Text3(props: ITextProps) {
    return (
        <H3>
            {props.children}
        </H3>
    );
}

export default Text3;