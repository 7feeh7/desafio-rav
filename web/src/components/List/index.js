import React from 'react';
import api from '../../service/api';
import { MdClose } from 'react-icons/md';
import { Container } from './styles';
import Card from '../Card';

export default function List({ data, index: listIndex }) {

    function deleteList(id){
        var confirma_exclusao = window.confirm('Tem certeza que deseja remover esta lista?');
        
        if( confirma_exclusao ){
            api.delete(`/groups/${id}`);
        }
    
    }

    return (
        <Container>
            <header>
                <h2>{data.nome}</h2>
                <button type="button">
                    <MdClose size={24} color="#fff" onClick={() => { deleteList(data.id) }} />
                </button>
            </header>

            <ul>
                {data.cards.map((card, index) => (
                    
                    <Card 
                        key={card.id} 
                        listIndex={listIndex}
                        index={index} 
                        data={card} 
                        idList={data.id}
                    />
                    
                ))}
            </ul>

        </Container>
    );
}