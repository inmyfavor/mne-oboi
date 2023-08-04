import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { goForward } from '../../app/pageModeSlice';

export interface OptionCardProps {
    id: string,
    title: string,
}

export default function OptionCard(props: OptionCardProps) {
    const dispatch = useAppDispatch();
    return (
        <div 
            className='optionCard'
            onClick={()=>dispatch(goForward())}
            >
                <input 
                type='radio'
                name='option'
                className='optionCardInput'
                />
                <div className='optionCard-img'></div>
                <h4 className='optionCard-title'>{props.title}</h4>
        </div>
    );
};