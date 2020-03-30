import styled, { css } from 'styled-components';

export const Container = styled.div`

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
        form {
            display: block !important;
        }
    `}
`;