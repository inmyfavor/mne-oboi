import React from 'react';
import Categories from './categories/Categories';
import ProductCards from './productCards/ProductCards';
import { OutlineButton } from '../../elements/Button';

export default function SecondPage() {
  return (
    <div className='sp-content'>
        <div className='choice-menu'>
            <h4 className='category-title'>Коллекции</h4>
            <Categories/>
        </div>
        <div className='cards-center'>
            <ProductCards/>
            <OutlineButton
                onClick={()=>{}}>
                    Перейти в каталог
            </OutlineButton>
        </div>
    </div>
  );
};