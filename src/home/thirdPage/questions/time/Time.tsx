import React from 'react';
import Question from '../Question';
import Questionnaire from './Questionnaire';

export default function Time() {
    return (
        <div>
            <Question
                num='2'
                text='Вы уже делаете ремонт?'/>
            <Questionnaire/>
        </div>
    );
};