import React, { useState } from 'react';
import api from '../../../service/api';

import { Container } from './styles';

export default function Form({ dataId }) {
    const[idList, setIdList] = useState('');
    const[descricao, setDescricao] = useState('');

    const salvarCard = () => {

        setIdList(dataId);

        if(idList){
            api.post('/cards', { descricao,  grupo: { id: idList}})
            .then(res => {
                console.log(res.data)
            });
        }
        
    }
    
    return(
        <Container>
            <form>
                <input 
                    type="text" 
                    onChange={e => setDescricao(e.target.value)}
                    required
                    />
        <button onClick={() => {salvarCard()}}>Salvar</button>
            </form>
        </Container>
    );
}