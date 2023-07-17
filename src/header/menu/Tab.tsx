import React from 'react';

interface TabProps {
    title: string;
}

export default function Tab({title}: TabProps) {
    return (
        <li className='tab'>
            <a>
                {title}
            </a>
        </li>
    );
};