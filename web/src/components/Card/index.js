import React from 'react';

import { Container } from './styles';

export default function Card({ data }) {
    return (
        <Container>
            <p>{data.descricao}</p>
        </Container>
    );
}