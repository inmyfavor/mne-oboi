import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/store';
import { setValue } from '../../../../app/sliderSlice';

export default function BudgetInput() {
    const dispatch = useAppDispatch();

    const value = useAppSelector((state: RootState) => state.slider.value);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setValue(e.target.value));
    }

    return (
        <input 
            type='text'
            className='budgetInput'
            value={value}
            onChange={handleChange}/>
    );
};