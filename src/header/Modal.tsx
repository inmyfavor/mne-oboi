import React from 'react';
import MobileMenu from './MobileMenu';
import Logo from './Logo';
import { useAppDispatch } from '../app/hooks';
import { close } from '../app/menuModalSlice';

export default function Modal() {
    const dispatch = useAppDispatch();

    function handleClose() {
        dispatch(close());
    }

    return (
        <div className='modal'>
            <Logo/>
            <MobileMenu/>
            <button 
                className='close'
                onClick={handleClose} />
        </div>
    );
};