import React from 'react';
import Tab from './Tab';

const tabs = [
    'КАТАЛОГ', 
    'ИНТЕРЬЕРНЫЕ НАКЛЕЙКИ', 
    'ДЕТСКИЕ ОБОИ', 
    'ОТЗЫВЫ', 
    'РАСПРОДАЖА', 
    'ДЛЯ МОНТАЖА', 
    'ИНФОРМАЦИЯ'
];

export default function Menu() {
    return (
        <ul className='menu'>
        {tabs.map((tab: string, index: number) => <Tab key={'tab:'+index} title={tab}/>)}
        </ul>
    );
};