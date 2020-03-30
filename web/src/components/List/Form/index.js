import React, { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

export default function Form({ formRef, visibilityForm, list, onSubmit }) {
    const inputRef = useRef();

    const[name, setName] = useState('');

    useEffect(() => {
        if(list){
            setName(list.name)
        }
        inputRef.current.focus();
    }, [visibilityForm]);

    const handleSubmit = async (e) => {
        if(e.keyCode === 13 && name) {
            e.preventDefault();
            if(list) {
                await onSubmit({ id: list.id, nome: name });
            } else {
                await onSubmit({ nome: name  });
            }
            setName('');
        }
    }
    
    return(
        <Container ref={formRef} visibilityForm={visibilityForm}>
            <form>
                <input
                    ref={inputRef} 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onKeyDown={e => handleSubmit(e)}
                    required
                />
            </form>
        </Container>
    ); 
}