import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';

interface BonusProps {
    title: string,
    src: string,
}

function Bonus({title, src}: BonusProps) {
    return (
        <div className='bonus'>
            <div className='pink-circle-delivery'>
                <img src={`./icons/${src}.svg`} alt=''/>
            </div>
            <p className='tp-text-10'>{title}</p>
        </div>
    );
};

export default function Discount() {
    const mode = useAppSelector((state: RootState) => state.pageMode.mode);
    return (
        <div className='discount'>
            <div className='bonus-gap'>
            <Bonus 
                title='Каталог'
                src='catalog'/>
            <Bonus 
                title='Бесплатная доставка'
                src='truck'/>
            </div>
            <div className='button-align'>
                <button
                    className='pink-percent-button'>
                        {mode*10}%
                </button>
                <p className='tp-text-10'>Ваша скидка</p>
            </div>
        </div>
    );
};