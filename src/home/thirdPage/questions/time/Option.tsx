import React from 'react';
import { useAppDispatch } from '../../../../app/hooks';
import { goForward } from '../../../../app/pageModeSlice';

interface OptionProps {
    text: string,
}

export default function Option({text}: OptionProps) {
    const dispatch = useAppDispatch();
    return (
        <button 
            className='option-content'
            onClick={() => dispatch(goForward())}>
            <input 
                type='radio'
                name='option'
                className='option'
                value={text}
                />
            <p className='option-text'>{text}</p>
        </button>
    );
};