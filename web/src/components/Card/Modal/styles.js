import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: none;
    width: 20%;
    height: 150px;
    background: white;
    position: absolute;
    top: 10%;
    left: 45%;
    margin-top: -75px; /* Metade da altura */
    margin-left: -125px; /* Metade da largura */
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;

    ${props => props.visibilityCard && css`
        display: block !important;
    `}
    
`;