import React from 'react';
import { CardProps } from './ProductCards';

export default function Card(props: CardProps) {
    return (
        <div className='card'>
            <div className='cardTitle'>{props.title}</div>
        </div>
    );
}