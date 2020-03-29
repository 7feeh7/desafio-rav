import React, { useState } from 'react';
import { Container } from './styles';

export default function Form({ listId, onSubmit }) {
    const[descricao, setDescricao] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        await onSubmit({ descricao : descricao, grupo: { id: listId }});
    }
    
    return(
        <Container>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    onChange={e => setDescricao(e.target.value)}
                    required
                    />
                <button type="submit">Salvar</button>
            </form>
        </Container>
    );
}