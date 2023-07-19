import React from 'react';
import Option from './Option';

const options = [
    'Да, в поисках подходящего дизайна',
    'Нет, только планируем и присматриваемся',
    'Срочно нужны обои',
]

export default function Questionnaire() {
    return (
        <div className='questionnaire'>
        {options.map((option: string, index: number) => <Option key={'options:'+index} text={option}/>)}
        </div>
    );
};