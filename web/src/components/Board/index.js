import React, { useState, useEffect } from 'react';
import produce from 'immer';
import BoardContext from './context';

import api from '../../service/api';

import List from '../List';
import ListForm from '../ListForm';

import { Container } from './styles';

export default function Board() {
    const[lists, setLists] = useState([]);

    async function getList() {
        const response = await api.get('/groups');
        setLists(response.data);
    }

    async function handleCard(data) {
        const response = await api.post('/cards', data);
        return response;
    }

    useEffect(() => {
        getList();
    }, []);


    function move(fromList, toList, from, to, card) {
        setLists(produce(lists, draft =>{
            const dragged = draft[fromList].cards[from];
            
            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }))
        handleCard(card);
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {lists.map((list, index) => <List key={list.id} index={index}  data={list} />)}
                <ListForm />
            </Container>
        </BoardContext.Provider>
    );
}