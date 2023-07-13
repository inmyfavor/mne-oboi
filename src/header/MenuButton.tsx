import React, { ReactNode } from 'react';
import { useAppDispatch } from '../app/hooks';
import { show } from '../app/menuModalSlice';

const lines: ReactNode[] = [];

for (let i = 0; i < 3; i++) {
    lines.push(<span className='line'></span>);
}

export default function MenuButton() {
    const dispatch = useAppDispatch();

    function handleShow() {
        dispatch(show());
    }

    return (
        <button 
            className='menu-lines'
            onClick={handleShow}>
            {lines}
        </button>
    );
};