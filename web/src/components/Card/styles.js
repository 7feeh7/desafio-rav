import styled, { css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    cursor: grab;
    
    p { 
        font-weight: 500;
        line-height: normal;
    }

    ${props => props.isDragging && css`
        border: 2px dashed rgba(0, 0, 0, 0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        cursor: grabbing;
        
        p, header {
            opacity: 0;
        }
    `}

`;