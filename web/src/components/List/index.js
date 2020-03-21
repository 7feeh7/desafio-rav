import React from 'react';

import { MdClose } from 'react-icons/md';
import { Container } from './styles';
import Card from '../Card';

export default function List({ data }) {
    return (
        <Container>
            <header>
                <h2>{data.nome}</h2>
                <button type="button">
                    <MdClose size={24} color="#fff" />
                </button>
            </header>

            <ul>
                {data.cards.map(card => <Card key={card.id} data={card} />)}
            </ul>
        </Container>
    );
}