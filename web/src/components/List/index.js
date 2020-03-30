import React, { useState, useRef } from 'react';

import { MdClose, MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';
import CardModal from '../Card/Modal';

import Form from '../Form/List';

export default function List({ data, index: listIndex, onDelete, onSubmit, updateGroup }) {
    const modalRef = useRef(null);
    const inputListRef = useRef(null);

    const[listId, setIdList] = useState('');
    const[dataCardUpdate, setDataCardUpdate] = useState('');
    const[visibilityCard, setVisibilityCard] = useState(false);
    const[visibilityInputList, setVisibilityInputList] = useState(false);
    const[headerList, setHeaderList] = useState(false);

    const showModal = (idList, data) => {
        setIdList(idList);
        setDataCardUpdate(data);
        setVisibilityCard(true);
        document.body.addEventListener("click", closeModal);
    }

    const closeModal = (e) => {
        if( modalRef.current) {
            const contain = modalRef.current.contains(e.target);
            if(!contain) {
                setVisibilityCard(false);
                document.removeEventListener("click", closeModal);
            } 
        }

    }

    const handleDelete = async(itemId) => {
        var confirma_exclusao = window.confirm('Tem certeza que deseja remover este grupo?');
       
        if(confirma_exclusao){
            await onDelete(itemId);
        }
    }

    const showInputList = () => {
        setVisibilityInputList(true);
        setHeaderList(true);
        document.body.addEventListener("click", closeInputList);
    }

    const closeInputList = (e) => {
        setVisibilityInputList(false);
        setHeaderList(false);
        document.removeEventListener("click", closeInputList);
    }

    return (
        <Container headerList={headerList}>
            <header>
                <h2 onClick={showInputList} >{data.nome}</h2>

                <button type="button">
                    <MdClose size={24} color="#fff" onClick={() => handleDelete(data.id)} />
                </button>
            </header>
            
            <Form formRef={inputListRef} visibilityForm={visibilityInputList} list={data} onSubmit={updateGroup} closeForm={closeInputList}/>
           
            <ul>
                {data.cards.map((card, index) => (
                    <Card 
                        showModal={showModal}
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

            <CardModal modalRef={modalRef} listId={listId} dataCardUpdate={dataCardUpdate} visibilityCard={visibilityCard} onSubmit={onSubmit} />
        </Container>
    );
}