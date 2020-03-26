import React, { useState, useRef } from 'react';

import api from '../../service/api';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

export default function ListForm() {
    const[header, setHeader] = useState('');
    const[form, setForm] = useState('');
    const[name, setName] = useState('');
    const formRef = useRef(null);


    const showForm = () => {
        setHeader('closeHeader');
        setForm('showForm');
        document.body.addEventListener("click", closeForm);
    }

    const closeForm = event => {
        const contain = formRef.current.contains(event.target);
        if(!contain){
            setHeader('');
            setForm('');
            document.removeEventListener("click", closeForm);
        }
    }

    const saveList = event => {
        if(event.keyCode === 13 && name) {
            api.post('/groups', { nome: name});
        }
    }

    return(
        <Container>
            <header className={header}>
                <button onClick={showForm}>
                    Novo grupo <MdAdd />
                </button>
            </header>

            <form ref={formRef} className={form}>
                <input 
                    id="teste"
                    type="text"
                    placeholder="Insira o nome do grupo"
                    autoComplete="off"
                    onChange={e => setName(e.target.value)} 
                    onKeyDown={e => saveList(e)}
                    required
                />
            </form>    
        </Container>
    );
}