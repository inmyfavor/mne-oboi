import React from 'react';

export default function Slider() {
    return (
        <input 
            type='range'
            className='slider'
            min='3000' max='20000'
            value='3000'/>
    );
};