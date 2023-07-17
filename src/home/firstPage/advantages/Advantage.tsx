import React from 'react';
import { AdvantageProps } from './Advantages';

export default function Advantage(props: AdvantageProps) {
    return (
        <div className='advantage'>
            {props.circle}
            {props.title}
        </div>
    );
};