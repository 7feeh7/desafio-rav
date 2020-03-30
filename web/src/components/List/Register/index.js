import React, { useState, useRef } from 'react';
import Form from '../Form';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

export default function AddList({ onSubmit }) {
    const ref = useRef();
    const[visibilityForm, setVisibilityForm] = useState('');

    const showForm = () => {
        setVisibilityForm(true);
        document.body.addEventListener("click", closeForm);
    }

    const closeForm = e => {
        const contain = ref.current.contains(e.target);
        if(!contain){
            setVisibilityForm(false);
            document.removeEventListener("click", closeForm);
        }
    }

    return(
        <Container visibilityForm={visibilityForm}>
            <header>
                <button onClick={showForm}>
                    Novo grupo <MdAdd />
                </button>
            </header>
            
            <Form formRef={ref} visibilityForm={visibilityForm} onSubmit={onSubmit} />
        </Container>
    );
}