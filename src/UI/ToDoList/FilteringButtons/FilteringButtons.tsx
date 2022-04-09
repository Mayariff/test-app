import s from './FilteringButtons.module.css';
import React, {useCallback} from 'react';
import {CustomButton} from '../../Common_Components';
import {FilteringButtonsType} from "./types";


//меню кнопок Активные/Все/завершенные внутри туду листа

export const FilteringButtons= React.memo(({status,setActiveFilter}:FilteringButtonsType )=>{
    const clickBtnAll = useCallback(()=> setActiveFilter('all'),[setActiveFilter])
    const clickBtnActive = useCallback(()=> setActiveFilter('active'),[setActiveFilter])
    const clickBtnCompleted = useCallback(()=> setActiveFilter('completed'),[setActiveFilter])

    return(
        <div className={s.btnMenu}>
            <CustomButton onClick={clickBtnActive} nameButton={'Активные'} disabled={status==='loading'}  />
            <CustomButton onClick={clickBtnAll} nameButton={'Все'} disabled={status==='loading'}  />
            <CustomButton onClick={clickBtnCompleted} nameButton={'Завершенные'} disabled={status==='loading'}  />
        </div>
    );
})