import React, { MouseEventHandler } from 'react';
import '../../../style/elements/button.scss';

interface ButtonProps {
    children: string;
    onClick: MouseEventHandler;
    className: string | undefined;
}

export default function CategoryButton(props: ButtonProps) {
    return (
        <button
            className={props.className}
            onClick={props.onClick}>
                {props.children}
        </button>
    );
};