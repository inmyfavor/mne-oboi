import React, { ReactNode } from 'react';
import { BlueCircle, PinkCircle, PurpleCircle } from './Circle';
import Advantage from './Advantage';

export interface AdvantageProps {
    id: string;
    title: string;
    circle: ReactNode;
}

const advantages = [
    { 
        id: '1', 
        title: 'Наши обои радуют более 23 000 клиентов!',
         circle: <PinkCircle/> 
    },
    { 
        id: '2', 
        title: 'Можно купить в рассрочку без переплат', 
        circle: <PurpleCircle/> 
    },
    { 
        id: '3', 
        title: 'Бесплатно вносим изменения в макет, учитываем мебель и меняем цвет', 
        circle: <BlueCircle/> 
    },
];

export default function Advantages() {
    return (
        <div className='advantages'>
            {advantages.map((advantage: AdvantageProps) => <Advantage key={'advantage:'+advantage.id} {...advantage}/>)}
        </div>
    );
};