import React, { useState, useEffect } from 'react';
import produce from 'immer';
import BoardContext from './context';

import api from '../../service/api';

import List from '../List';

import { Container } from './styles';

export default function Board() {
    const[lists, setLists] = useState([]);

    function move(fromList, toList, from, to) {
        setLists(produce(lists, draft =>{
            const dragged = draft[fromList].cards[from];
            
            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }))
    }

    useEffect(() => {
        async function getList() {
            const response = await api.get('/groups');
            setLists(response.data);
        }
        getList();
    }, []);

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {lists.map((list, index) => <List key={list.id} index={index}  data={list}/>)}
            </Container>
        </BoardContext.Provider>
    );
}