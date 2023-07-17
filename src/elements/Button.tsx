import React from 'react';
import '../style/elements/button.scss';

interface ButtonProps {
    children: string;
}

export function PinkButton({children}: ButtonProps) {
    return (
        <div className='pink-button'>{children}</div>
    );
};

export function WhiteButton({children}: ButtonProps) {
    return (
        <div className='white-button'>{children}</div>
    );
};