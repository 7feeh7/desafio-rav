import React, { useState, useRef } from 'react';

import { MdClose, MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';
import CardModal from '../Card/Modal';

export default function List({ data, index: listIndex, onDelete, onSubmit }) {
    const modalRef = useRef();
    const[idTeste, setIdTeste] = useState('');
    const[visibilityCard, setVisibilityCard] = useState(false);

    const showModal = (idList) => {
        setIdTeste(idList);
        setVisibilityCard(true);
        document.body.addEventListener("click", closeModal);
    }

    const closeModal = (e) => {
        const contain = modalRef.current.contains(e.target);
        if(!contain) {
            setVisibilityCard(false);
            document.removeEventListener("click", closeModal);
        }
    }

    const handleDelete = async(itemId) => {
        var confirma_exclusao = window.confirm('Tem certeza que deseja remover este grupo?');
       
        if(confirma_exclusao){
            await onDelete(itemId);
        }
    }

    return (
        <Container>
            <header>
                <h2>{data.nome}</h2>
                <button type="button">
                    <MdClose size={24} color="#fff" onClick={() => handleDelete(data.id)} />
                </button>
            </header>

            <ul>
                {data.cards.map((card, index) => (
                    <Card 
                        key={card.id} 
                        listIndex={listIndex}
                        index={index} 
                        data={card} 
                        listId={data.id}
                    /> 
                ))}

                <button onClick={() => showModal(data.id)} className="button-card" >
                    Novo Card <MdAdd />
                </button>  
            </ul>

            <CardModal modalRef={modalRef} listId={idTeste} visibilityCard={visibilityCard} onSubmit={onSubmit} />
        </Container>
    );
}