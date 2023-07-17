import React from 'react';
import '../style/header/style.scss';

import Call from './Call';
import MenuButton from './menu/MenuButton';
import Modal from './Modal';
import Logo from './Logo';

import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import Menu from './menu/Menu';

export default function Header() {
    const visible = useAppSelector((state: RootState) => state.menuModal.visible);

    return (
        <div className='header'>
            <div className='left-block'>
                <MenuButton/>
                <Logo/>
            </div>
            <div className='right-block'>
                <ul className='desktop-menu'>
                    <Menu/>
                </ul>
                <div className='phone'>+7 999 444 32 84</div>
                <Call/>
            </div>
            { visible && <Modal/> }
        </div>
    );
};