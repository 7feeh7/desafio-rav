import React, { useState, useEffect } from 'react';
import produce from 'immer';
import BoardContext from './context';

import api from '../../service/api';

import List from '../List';
import AddList from '../List/Register';

import { Container } from './styles';

export default function Board() {
    const[lists, setLists] = useState([]);
    
    async function getList() {
        const response = await api.get('/groups');
        setLists(response.data);
    }
    useEffect(() => {
        getList();
    }, []);

    async function handleList(data) {
        await api.post('/groups', data);
        getList();
        // const response = await api.post('/groups', data);
        // setLists([...lists, response.data]);
    }

    async function handleDeleteList(itemId) {
        await api.delete(`/groups/${itemId}`);
        const updateList = lists.filter(list => list.id !== itemId);
        setLists(updateList);
    }

    async function handleCard(data) {
        await api.post('/cards', data);
        getList();
    }


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
                {lists.map((list, index) => <List key={list.id} index={index}  data={list} onDelete={handleDeleteList} onSubmit={handleCard} updateGroup={handleList}/>)}
                <AddList onSubmit={handleList} />
            </Container>
        </BoardContext.Provider>
    );
}