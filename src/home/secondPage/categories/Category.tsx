import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCategory } from '../../../app/categoriesSlice';
import { RootState } from '../../../app/store';
import CategoryButton from './CategoryButton';

interface CategoryProps {
    title: string;
}

export default function Category({title}: CategoryProps) {
    const dispatch = useAppDispatch();

    const category = useAppSelector((state: RootState) => state.categories.category);

    function handleChangeCategory() {
        dispatch(selectCategory(title))
    }

    function chooseClassName() {
        if (category === title) {
            return 'category-button-selected';
        } else {
            return 'category-button';
        }
    }

    return (
        <CategoryButton
            onClick={handleChangeCategory}
            className={chooseClassName()}>
                {title}
        </CategoryButton>
    );
};