import React from 'react';
import '../style/header.scss';
import Menu from './Menu';
import Call from './Call';

export default function Header() {
  return (
    <div className='header'>
        <img className='logo' src='icons/logo.svg' alt=''/>
        <Menu/>
        <div className='phone'>+7 999 444 32 84</div>
        <Call/>
    </div>
  );
};