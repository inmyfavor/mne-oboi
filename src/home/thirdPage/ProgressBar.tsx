import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import NavButtons from './NavButtons';

export default function ProgressBar() {
    const mode = useAppSelector((state: RootState) => state.pageMode.mode);
    return (
        <div className='progressBar-content'>
            <div className='pb-union'>
                <div className='done'>
                    <p className='tp-text-16'>Готово:</p>
                    <div className='percent-text'>{mode*20}%</div>
                </div>
                <div className='progressBar'>
                    <div 
                        className='progressBar-filled'
                        style={{width: `${mode*20}%`}}>
                    </div>
                </div>
            </div>
            <NavButtons/>
        </div>
    );
};