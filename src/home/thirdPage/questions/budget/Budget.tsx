import React from 'react';
import BudgetInput from './BudgetInput';
import Slider from './Slider';

export default function Budget() {
  return (
    <div>
        <h4 className='gift-title'>
            Подберите дизайнерские обои за 5 минут
        </h4>
        <div className='question-content'>
            <div className='question'>
                <div className='num-circle'>1</div>
                <p className='question-title'>Итак, на какой бюджет рассчитываете 
                    при выборе обоев?</p>
            </div>
            <BudgetInput/>
            <Slider/>
        </div>
    </div>
  );
};