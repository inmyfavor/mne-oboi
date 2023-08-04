import React from 'react';
import Budget from './questions/budget/Budget';
import ProgressBar from './ProgressBar';
import Discount from './Discount';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import Time from './questions/time/Time';
import Rooms from './room/Rooms';
import Design from './design/Design';
import Material from './material/Material';

export default function ThirdPage() {
    const mode = useAppSelector((state: RootState) => state.pageMode.mode);
    return (
    <div className='sp-content'>
        <h4 className='gift-title'>
            Подберите дизайнерские обои за 5 минут
        </h4>
        <div className='tp-align'>
            {/* <Budget/> */}
            {/* <Time/> */}
            {/* <Rooms/> */}
            {/* <Design/> */}
            <Material/>
            <ProgressBar/>
            <Discount/>
        </div>
    </div>
    );
};