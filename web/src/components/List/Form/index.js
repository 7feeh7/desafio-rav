import React, { useState, useRef } from 'react';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';


export default function Form({ onSubmit }) {
    const ref = useRef();
    const[header, setHeader] = useState('');
    const[form, setForm] = useState('');
    const[name, setName] = useState('');


    const showForm = () => {
        setHeader('closeHeader');
        setForm('showForm');
        document.body.addEventListener("click", closeForm);
    }

    const closeForm = event => {
        const contain = ref.current.contains(event.target);
        if(!contain){
            setHeader('');
            setForm('');
            document.removeEventListener("click", closeForm);
        }
    }

    async function handleSubmit(e) {
        if(e.keyCode === 13 && name) {
            e.preventDefault();
            
            await onSubmit({ 
                nome: name, 
                cards: [] 
            });
        }
    }

    return(
        <Container>
            <header className={header}>
                <button onClick={showForm}>
                    Novo grupo <MdAdd />
                </button>
            </header>

            <form ref={ref} className={form}>
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