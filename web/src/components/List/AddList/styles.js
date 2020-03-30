import styled, { css } from 'styled-components';

export const Container = styled.div`

    background: #f1f1f1;
    height: 100%;
    width: 320px;
    padding: 0px 10px;

    header {
        align-items: center;

        button {
            width: 100%;
            color: #333;
            border: 0; 
            font-size: 20px;
            padding: 15px;
            cursor: pointer;
        }
    }

    ${props => props.visibilityForm && css`
    
        header{
            display: none;
        }
    
    `}

`;