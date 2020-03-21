import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    background: #f1f1f1;
    margin: 0 10px;

    & + div {
        border-left: 1px solid rgba(0, 0, 0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h2 {
            font-weight: 500;
            font-size: 16px;
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

`;