import React from 'react';
import CategoryButton from '../secondPage/categories/CategoryButton';
import { goBack, goForward } from '../../app/pageModeSlice';
import { useAppDispatch } from '../../app/hooks';

export default function NavButtons() {
    const dispatch = useAppDispatch();
    return (
        <div className='navBtns'>
            <CategoryButton
                className='backBtn'
                onClick={()=>dispatch(goBack())}>
                    Назад
            </CategoryButton>
            <CategoryButton
                className='forwardBtn'
                onClick={()=>dispatch(goForward())}>
                    Далее
            </CategoryButton>
        </div>
    );
};