import React from 'react';
import Card from './Card';

export interface CardProps {
    id: string;
    title: string;
}

const productCards = [
    { id: '1', title: 'Горы' },
    { id: '2', title: 'Карты' },
    { id: '3', title: 'Космос' },
    { id: '4', title: 'Выше неба' },
    { id: '5', title: 'Герои' },
    { id: '6', title: 'Дино' },
    { id: '7', title: 'Животные' },
    { id: '8', title: 'Лесные' },
    { id: '9', title: 'Мульт' },
    { id: '10', title: 'Принцессам' },
    { id: '11', title: 'Сафари' },
    { id: '12', title: 'Скандинавия' },

]

export default function ProductCards() {
    return (
        <div className='productCards'>
            {productCards.map((card: CardProps) => <Card key={'card:'+card.id} {...card}/>)}
        </div>
    );
};