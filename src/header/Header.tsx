import React from 'react';
import '../style/header.scss';

import Call from './Call';
import MenuButton from './MenuButton';
import DesktopMenu from './DesktopMenu';
import Modal from './Modal';
import Logo from './Logo';

import { useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

export default function Header() {
    const visible = useAppSelector((state: RootState) => state.menuModal.visible);

    return (
        <div className='header'>
            <div className='left-block'>
                <MenuButton/>
                <Logo/>
            </div>
            <div className='right-block'>
                <DesktopMenu/>
                <div className='phone'>+7 999 444 32 84</div>
                <Call/>
            </div>
            { visible && <Modal/> }
        </div>
    );
};