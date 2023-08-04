import React from 'react';
import Question from './questions/Question';
import OptionCard, { OptionCardProps } from './OptionCard';

interface Options {
    id: string;
    title: string;
}

interface OpCardsFormProps {
    options: Array<Options>;
    num: string;
    text: string;
}

export default function OpCardsForm(props: OpCardsFormProps) {
    return (
        <div className='optionCard-content'>
            <Question
                num={props.num}
                text={props.text}/>
            <div className='optionCard-align'>
                {props.options.map((option: OptionCardProps) => <OptionCard key={`${option.title}:${option.id}`} {...option}/>)}
            </div>
        </div>
    );
};