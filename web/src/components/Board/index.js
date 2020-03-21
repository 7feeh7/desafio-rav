import React, { useState, useEffect } from 'react';
import api from '../../service/api';

import List from '../List';

import { Container } from './styles';

export default function Board() {
    const[lists, setLists] = useState([]);

    useEffect(() => {
        async function getLists() {
            const response = await api.get('/groups');
            setLists(response.data);
        }
        getLists();
    }, []);

    return (
        <Container>
            {lists.map(list => <List key={list.id}  data={list}/>)}
        </Container>
    );
}