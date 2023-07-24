import React from 'react';
import { RoomProps } from './Rooms';

export default function Room(props: RoomProps) {
    return (
        <div className='room'>
            <div className='room-img'></div>
            <h4 className='room-title'>{props.title}</h4>
        </div>
    );
};