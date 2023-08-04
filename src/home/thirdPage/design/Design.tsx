import React from 'react';
import OpCardsForm from '../OpCardsForm';

const design = [
    { id: '1', title: 'Природный' },
    { id: '2', title: 'Флюид арт' },
    { id: '3', title: 'Пейзаж' },
    { id: '4', title: 'Детский' },
]


export default function Design() {
    return (
        <OpCardsForm
            options={design}
            num='4'
            text='Какой дизайн присматриваете?'/>
    );
};