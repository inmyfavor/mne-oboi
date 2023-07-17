import React, { MouseEventHandler } from 'react';
// import '../style/elements/button.scss';

interface ButtonProps {
    children: string;
    onClick: MouseEventHandler;
}

export function PinkButton({children, onClick}: ButtonProps) {
    return (
        <button 
            className='pink-button'
            onClick={onClick}>
                {children}
        </button>
    );
};

export function WhiteButton({children, onClick}: ButtonProps) {
    return (
        <button 
            className='white-button'
            onClick={onClick}>
                {children}
        </button>
    );
};

export function OutlineButton({children, onClick}: ButtonProps) {
    return (
        <button 
            className='outline-button'
            onClick={onClick}>
                {children}
        </button>
    );
};