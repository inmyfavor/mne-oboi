import React from 'react';

interface OptionProps {
    text: string,
}

export default function Option({text}: OptionProps) {
    return (
        <div className='option-content'>
            <input
                type='radio'
                name='option'
                className='option-hidden'/>
            <input 
                type='radio'
                name='option'
                className='option'
                value={text}/>
            <p className='option-text'>{text}</p>
        </div>
    );
};