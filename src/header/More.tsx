import React from 'react';
import Tab from './menu/Tab';

const tabs = [
    'О компании',
    'Отказ от услуги. Возврат товара',
    'Доставка и оплата',
    'Сотрудничество для дизайнеров',
    'Монтаж',
];

export default function More() {
    return (
        <div className='modal-more'>
            {tabs.map((tab: string, index: number) => <Tab key={'tab-more:'+index} title={tab}/>)}
        </div>
    );
};