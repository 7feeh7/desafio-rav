import React from 'react';
import Form from '../Form';

import { Container } from './styles';


export default function Modal({ listId, dataCardUpdate, visibilityCard, modalRef, onSubmit }) {
    return(
        <Container ref={modalRef} visibilityCard={visibilityCard}>
            
            <Form listId={listId} dataCardUpdate={dataCardUpdate} onSubmit={onSubmit}/>
        </Container>
    );
}