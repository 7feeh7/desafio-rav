import React from 'react';
import api from '../../service/api';
import { MdClose } from 'react-icons/md';
import { Container } from './styles';
import Card from '../Card';

export default function List({ data }) {

    function deleteCard(id){
        var confirma_exclusao = window.confirm('Tem certeza que deseja excluir este Card?');
        
        if( confirma_exclusao ){
            api.delete(`/groups/${id}`);
        }
    
    }

    return (
        <Container>
            <header>
                <h2>{data.nome}</h2>
                <button type="button">
                    <MdClose size={24} color="#fff" onClick={() => { deleteCard(data.id) }} />
                </button>
            </header>

            <ul>
                {data.cards.map(card => <Card key={card.id} data={card} />)}
            </ul>
        </Container>
    );
}