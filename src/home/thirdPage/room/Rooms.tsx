import React from 'react';
import OpCardsForm from '../OpCardsForm';

const rooms = [
    { id: '1', title: 'В спальню или гостинную' },
    { id: '2', title: 'В детскую' },
    { id: '3', title: 'На кухню или в коридор' },
    { id: '4', title: 'Во всю квартиру / дом' },
];


export default function Rooms() {
    return (
        <OpCardsForm
            options={rooms}
            num='3'
            text='Для какой комнаты подбираете обои?'/>
    );
};