import React from 'react';
import Category from './Category';

const categories = [
    'Детские обои', 
    'Взрослые обои', 
    'Интерьерные наклейки'
];

export default function Categories() {
  return (
    <div className='categories'>
        {categories.map((category: string, index: number) => <Category key={'tab-menu:'+index} title={category}/>)}
    </div>
  );
};