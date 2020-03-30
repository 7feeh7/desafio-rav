import styled from 'styled-components';

export const Container = styled.div`
    
    form {
        margin-top: 15px;
        padding:10px;

        textarea {
            width: 100%;
            font-size: 19px;
            color: #333;
            border-radius: 5px;
            border: 1px solid rgba(0,0,0,.2);
        }

        button {
            margin-top: 15px;
            background: #1976d2;
            border-radius: 5px;
            border: none;
            color: white;
            padding: 10px 25px;
            cursor: pointer;
        }
    }
`;