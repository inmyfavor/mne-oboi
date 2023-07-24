import React from 'react';
import Question from '../questions/Question';
import Room from './Room';

export interface RoomProps {
    id: string,
    title: string,
}

const rooms = [
    { id: '1', title: 'В спальню или гостинную' },
    { id: '2', title: 'В детскую' },
    { id: '3', title: 'На кухню или в коридор' },
    { id: '4', title: 'Во всю квартиру / дом' },
]


export default function Rooms() {
    return (
        <div className='rooms-content'>
            <Question
                num='3'
                text='Для какой комнаты подбираете обои?'/>
            <div className='rooms-align'>
                {rooms.map((room: RoomProps) => <Room key={'room:'+room.id} {...room}/>)}
            </div>
        </div>
    );
};