import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './bananaArea.css';



const BananaList = [

    {
        id: 'banana1',
        name: 'Banana',
        thumb: '/images/banana.png'
    },
    {
        id: 'banana2',
        name: 'Banana',
        thumb: '/images/banana.png'
    },
    {
        id: 'banana3',
        name: 'Banana',
        thumb: '/images/banana.png'
    },
    {
        id: 'banana4',
        name: 'Banana',
        thumb: '/images/banana.png'
    },
]



function BananaArea() {
    const [bananas, updateBananas] = useState(BananaList);





    function handleOnDragEnd(result) {

        if (!result.destination) {
            return
        };


        const items = Array.from(bananas);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateBananas(items);
    }


    return (
        <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="bananas">
                    {(provided) => (
                        <ul className="bananas" {...provided.droppableProps} ref={provided.innerRef}>
                            {bananas.map(({ id, name, thumb }, index) => {
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="bananas-thumb">
                                                    <img src={thumb} alt={`${name} Thumb`} />
                                                </div>
                                                
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}

export default BananaArea;