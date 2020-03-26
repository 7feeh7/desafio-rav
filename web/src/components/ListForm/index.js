import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

export default function ListForm() {

    function showForm() {
        const form = document.getElementById('form-list')
                    
        if(form.hidden) {
            form.hidden = false;
        } else {
            form.hidden = true;
        }
    }

    return(
        <Container>
            <header>
                <button onClick={ () => { showForm() }}>
                    Novo grupo <MdAdd />
                </button>
            </header>

            <form id="form-list" hidden>
                <input type="text" name="" id="" required/>
            </form>    
        </Container>
    );
}