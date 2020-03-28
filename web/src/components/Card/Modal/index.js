import React from 'react';
import Form from '../Form';

import { Container } from './styles';


export default function Modal({ className }) {
    return(
        <Container className={className}>
            <Form />
        </Container>
    );
}