import React, { useState, useRef } from 'react';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

export default function Form({ onSubmit }) {
    const ref = useRef();
    const[visibilityForm, setVisibilityForm] = useState('');
    const[name, setName] = useState('');


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

    const handleSubmit = async (e) => {
        if(e.keyCode === 13 && name) {
            e.preventDefault();
            await onSubmit({ nome: name, cards: [] });
        }
    }

    return(
        <Container ref={ref} visibilityForm={visibilityForm}>
            <header>
                <button onClick={showForm}>
                    Novo grupo <MdAdd />
                </button>
            </header>

            <form >
                <input 
                    placeholder="Insira o nome do grupo"
                    required
                    onChange={e => setName(e.target.value)} 
                    onKeyDown={e => handleSubmit(e)}
                />
            </form>    
        </Container>
    );
}