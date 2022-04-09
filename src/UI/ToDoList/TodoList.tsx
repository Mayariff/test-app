import React, {ChangeEventHandler, MouseEventHandler, useCallback, useState} from 'react';
import s from './ToDoList.module.css'
import {todolistActions} from "../../BLL/TodoList_reducer";
import {appActions, appSelectors} from '../../BLL/App_reducer';
import {FilteringButtons, TodoListType, Zadacha} from './index';
import {activeFilterType, useAppSelector} from '../../APP';
import {AddingField} from '../Common_Components';
import {useDispatch} from 'react-redux';

//лист заданий

export const TodoList = React.memo(({value, zadachi, status, ...props}: TodoListType) => {

    const error = useAppSelector<string | null>(appSelectors.selectError)
    const dispatch = useDispatch()

    //action creators
    const {addTodoTC} = todolistActions
    const {setAppError} = appActions
    //храним значения поля ввода
    const [inputText, setInputText] = useState<string>('')
    //храним значения статуса
    const [activeFilter, setActiveFilter] = useState<activeFilterType>('all')

    //обработчик изменения поля ввода
    const onchangeHandler: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
        dispatch(setAppError(null))
        setInputText(e.currentTarget.value)
    }, [dispatch, setAppError])

    //обработчик добавления задачи при нажатие на кнопку
    const onClickAddHandler: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
        if (inputText.trim().length) {
            dispatch(addTodoTC(inputText.trim()))
            setInputText('')
        } else {
            dispatch(setAppError('Пожалуйста, введите значение'))
        }
    }, [dispatch, inputText, addTodoTC, setAppError])

    //обработчик добавления задачи при нажатие на Enter
    const onEnterHandler = useCallback(() => {
        if (inputText.trim().length) {
            dispatch(addTodoTC(inputText.trim()))
            setInputText('')
        } else {
            dispatch(setAppError('Пожалуйста, введите значение'))
        }
    }, [dispatch, inputText, addTodoTC, setAppError])

    //фильтруем задачи в зависимости от статуса активности
    let tasksForTodolist = zadachi
    if (activeFilter === 'active') {
        tasksForTodolist = zadachi.filter(z => z.active)
    }
    if (activeFilter === 'completed') {
        tasksForTodolist = zadachi.filter(z => !z.active)
    }

    return (
        <div className={s.paperContainer}>
            <h2 className={s.value}>{value}</h2>
            <AddingField status={status} onEnterHandler={onEnterHandler}
                         onClickAddHandler={onClickAddHandler}
                         inputText={inputText}
                         onchangeHandler={onchangeHandler}
                         error={error}/>
            <ul className={s.tasks}>
                {tasksForTodolist.map(t =>
                    <Zadacha key={t.id} task={t}
                             clickCheckBox={props.clickCheckBox}
                             clickRemoveBtn={props.clickRemoveBtn}/>)}
            </ul>
            <FilteringButtons status={status} setActiveFilter={setActiveFilter}/>
            {error && <span className={s.error}>{error}</span>}
        </div>
    );
});
