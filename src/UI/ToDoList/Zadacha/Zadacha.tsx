import React, {ChangeEventHandler, MouseEventHandler, useCallback} from 'react';
import s from './Zadacha.module.css'
import {CustomButton, CustomCheckBox} from '../../Common_Components';
import {zadachaPropsType} from '../index';


//отрисовка каждой отдельной задачи
export const Zadacha = React.memo(({task, clickCheckBox, clickRemoveBtn,}: zadachaPropsType) => {

    // обработчик изменения чекбокса
    const clickCheckBoxHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        clickCheckBox(task.id, e.currentTarget.checked)
    },[task.id, clickCheckBox])

    // обработчик нажатия на кнопку 'Х' (удаление)
    const clickRemoveBtnHandler: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
        clickRemoveBtn(task.id)
    },[task.id])

    // цвет галочки
    const styleV = task.active ? s.isActive : s.isNotActive

    return (
        <li key={task.id} id={task.id} className={s.item}>
            <span className={styleV}> &#10004; </span>
            <span className={s.text}>
                    {task.text}</span>
            <div className={s.itemMenu}>
                <CustomCheckBox checked={task.active} onChange={clickCheckBoxHandler}/>
                <CustomButton nameButton={'X'} red={true} onClick={clickRemoveBtnHandler}/>
            </div>
        </li>

    );
});
