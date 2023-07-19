import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import { setValue } from '../../../../app/sliderSlice';

export default function Slider() {
    const dispatch = useAppDispatch();

    const sliderValue = useAppSelector((state: RootState) => state.slider.value);
    const value = sliderValue ? sliderValue : '0';

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setValue(e.target.value));
    }
    return (
        <div className='slider-content'>
            <input 
                type='range'
                className='slider'
                min='3000' max='20000'
                value={value}
                />
            <input 
                type='range'
                className='slider-thumb'
                min='3000' max='20000'
                value={value}
                onChange={handleChange}
                />
            <div className='slider-range'>
                <p>3000</p>
                <p>20000</p>
            </div>
        </div>
    );
};