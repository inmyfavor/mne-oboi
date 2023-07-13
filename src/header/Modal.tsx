import React from 'react';
import Logo from './Logo';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { closeModal } from '../app/menuModalSlice';
import { showMore, closeMore } from '../app/moreModalSlice';
import { RootState } from '../app/store';
import More from './More';
import Menu from './menu/Menu';
import Call from './Call';

export default function Modal() {
    const dispatch = useAppDispatch();

    const plus = useAppSelector((state: RootState) => state.moreModal.plus);
    const show = useAppSelector((state: RootState) => state.moreModal.showMore);

    function handleShowMore() {
        if (plus) {
            dispatch(closeMore());
        } else {
            dispatch(showMore());
        }
    }

    function handleCloseModal() {
        dispatch(closeModal());
        if (plus) {
            dispatch(closeMore());
        }
    }

    return (
        <div className='modal'>
            <div className='width-480'>
                <div className='modal-menu'>
                    <Logo/>
                    <ul className='mobile-menu'>
                        <Menu/>
                    </ul>
                    <button 
                        className='more'
                        style={plus}
                        onClick={handleShowMore}/>
                </div>
                { show && <More/> }
            </div>
            <div className='modal-end'>
                <Call/>
                <div className='modal-phone'>+7 999 444 32 84</div>
                <p className='txt-gray'>ИП Сурков С.Э. ИНН 312300837408</p>
            </div>
            <button 
                className='close'
                onClick={handleCloseModal} />
        </div>
    );
};