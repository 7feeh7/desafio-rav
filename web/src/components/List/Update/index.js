import React, { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

export default function Form({ inputListRef, visibilityInputList, list, updateGroup }) {
    const inputRef = useRef(null);
    const[name, setName] = useState('');

    useEffect(() => {
        if(list){
            setName(list.nome);
        }
    }, [list]);

    useEffect(() => {
        inputRef.current.focus();
    }, [visibilityInputList]);

    const handleSubmit = async(e) => {
        if(e.keyCode === 13 && name) {
            e.preventDefault();
            await updateGroup({ id: list.id, nome: name });
        }
    }
    
    return(
        <Container ref={inputListRef} visibilityInputList={visibilityInputList}>
            <form>
                <input 
                    ref={inputRef}
                    type="text" 
                    onChange={e => setName(e.target.value)} 
                    onKeyDown={e => handleSubmit(e)}
                    value={name}/>
            </form>
        </Container>
    );
}