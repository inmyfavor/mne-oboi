import React from 'react';
import OpCardsForm from '../OpCardsForm';

const design = [
    { id: '1', title: 'Флизелин' },
    { id: '2', title: 'Бумага' },
]


export default function Material() {
    return (
        <OpCardsForm
            options={design}
            num='5'
            text='Какой материал выбираете?'/>
    );
};