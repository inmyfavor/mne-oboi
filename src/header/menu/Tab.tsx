import React from 'react';

interface TabProps {
    title: string;
}

export default function Tab(props: TabProps) {
    return (
        <li className='tab'>
            <a>
                {props.title}
            </a>
        </li>
    );
};