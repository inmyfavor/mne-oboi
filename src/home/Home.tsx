import React from 'react';
import '../style/home/style.scss';
import FirstPage from './firstPage/FirstPage';
import SecondPage from './secondPage/SecondPage';
import ThirdPage from './thirdPage/ThirdPage';

export default function Home() {
  return (
    <div className='home'>
      <FirstPage/>
      <SecondPage/>
      <ThirdPage/>
    </div>
  );
};
