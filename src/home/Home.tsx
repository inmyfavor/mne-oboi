import React from 'react';
import '../style/home.scss';
import Header from '../header/Header';

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <div style={{height: '1000px'}}></div>
    </div>
  );
};
