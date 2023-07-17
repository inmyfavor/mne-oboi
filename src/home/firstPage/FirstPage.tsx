import React from 'react';
import Header from '../../header/Header';
import Background from './Background';
import { PinkButton, WhiteButton } from '../../elements/Button';
import Advantages from './advantages/Advantages';

export default function FirstPage() {
    return (
        <>
            <Header/>
            <Background/>
            <div className='fp-main'>
                <h4 className='home-title'>
                    Огромный выбор обоев для детских и взрослых комнат
                </h4>
                <div className='buttons-block'>
                    <PinkButton
                        onClick={()=>{}}>
                            Перейти в каталог
                    </PinkButton>
                    <WhiteButton
                        onClick={()=>{}}>
                            Подобрать обои за 5 минут</WhiteButton>
                </div>
                <Advantages/>
            </div>
        </>
    );
};