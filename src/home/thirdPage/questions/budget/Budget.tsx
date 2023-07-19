import React from 'react';
import BudgetInput from './BudgetInput';
import Slider from './Slider';
import Question from '../Question';

export default function Budget() {
  return (
      <>
        <Question
          num='1'
          text='Итак, на какой бюджет 
          рассчитываете при выборе обоев?'/>
        <BudgetInput/>
        <Slider/>
      </>
  );
};