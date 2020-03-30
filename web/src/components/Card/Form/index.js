import React, { useState, useEffect } from 'react';
import { Container } from './styles';

export default function Form({ listId, dataCardUpdate, onSubmit }) {

    const[descricao, setDescricao] = useState('');

    useEffect(() => {

        if(dataCardUpdate) {
            setDescricao(dataCardUpdate.descricao);
        }
    }, [dataCardUpdate]);

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(dataCardUpdate){
            await onSubmit({ id: dataCardUpdate.id, descricao : descricao, grupo: { id: listId }});
        } else {
            await onSubmit({ descricao : descricao, grupo: { id: listId }});
        }

        setDescricao('');
    }
    
    return(
        <Container>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Insira um título para este cartão..."  required />
                <button type="submit">Salvar</button>
            </form>
        </Container>
    );
}