import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    background: #f1f1f1;
    margin: 0 10px;

    header {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2 {
            font-weight: 500;
            font-size: 20px;
            color: #333;
            padding: 0 10px;
        }
    
        button {
            width: 30px;
            height: 30px;
            border-radius: 30px;
            background: #616161;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 30px;
    }

    .button-card {
        padding: 15px;
        width: 100%;
        color: #333;
        border: 0; 
        font-size: 20px;
        cursor: pointer;
    }

`;