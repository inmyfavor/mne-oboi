import React from 'react';

interface QuestionProps {
    num: string,
    text: string,
}

export default function Question({num, text}: QuestionProps) {
    return (
        <div className='question'>
            <div className='num-circle'>{num}</div>
            <p className='question-title'>{text}</p>
        </div>
    );
};