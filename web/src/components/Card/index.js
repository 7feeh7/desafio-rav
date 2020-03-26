import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import BoardContext from '../Board/context';

import { Container } from './styles';

export default function Card({ data, index, listIndex, idList }) {

    const ref = useRef();
    const { move } = useContext(BoardContext);
    const[{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex, card:{id: data.id, descricao: data.descricao, grupo: {id: ''}}  },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const[, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
           

            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex){
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = targetSize.height / 2
            
            const draggedOfset = monitor.getClientOffset();
            const draggedTop = draggedOfset.y - targetSize.top;
            
            if(draggedIndex < targetIndex && draggedTop < targetCenter){
                return;
            }

            if(draggedIndex > targetIndex && draggedTop > targetCenter){
                return;
            }
            item.card.grupo.id = idList;
            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex, item.card);
            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    });

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
            <p>{data.descricao}</p>
        </Container>
    );
}