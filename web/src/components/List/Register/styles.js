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

    form {
        width: 300px;
        padding:10px;
        display: none;

        input {
            width: 100%;
            height: 42px;
            font-size: 20px;
            color: #333;
            border-radius: 5px;
           /* border: 1px solid rgba(192, 208, 230, 0.8); */
           border: 1px solid rgba(0,0,0,.2);
        }
    }

    ${props => props.visibilityForm && css`
    
        header{
            display: none;
        }

        form {
            display: block !important;
        }
    
    `}

`;