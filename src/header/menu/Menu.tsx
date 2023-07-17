import React from 'react';
import Tab from './Tab';

const tabs = [
    'КАТАЛОГ', 
    'ДЕТСКИЕ ОБОИ', 
    'ОТЗЫВЫ', 
    'РАСПРОДАЖА', 
    'ДЛЯ МОНТАЖА', 
    'ИНФОРМАЦИЯ'
];

export default function Menu() {
    return (
        <>
        {tabs.map((tab: string, index: number) => <Tab key={'tab-menu:'+index} title={tab}/>)}
        </>
    );
};