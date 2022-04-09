import React, {useCallback, useEffect} from 'react';
import s from './App.module.css';
import {useDispatch} from 'react-redux';
import {appSelectors, RequestStatusType} from '../BLL/App_reducer';
import {todolistActions, todoSelectors, zadachiType} from '../BLL/TodoList_reducer';
import {Loading} from '../UI/Common_Components';
import {TodoList} from '../UI/ToDoList';
import {useAppSelector} from './store';


function App() {
    const status = useAppSelector<RequestStatusType>(appSelectors.selectStatus)
    const zadachi = useAppSelector<Array<zadachiType>>(todoSelectors.selectedZadachi)
    const dispatch = useDispatch()

    const {changeStatus, removeTodo, fetchTodolistsTC} = todolistActions

     //изменение статуса активности
    const clickCheckBox = useCallback((id: string, active: boolean) => {
        dispatch(changeStatus(id, active))
    }, [dispatch, changeStatus])

    //удаление  задачи
    const clickRemoveBtn = useCallback((id: string) => {
        dispatch(removeTodo(id))
    }, [dispatch, removeTodo])

    useEffect(() => {
        dispatch(fetchTodolistsTC())
    }, [])

    return (
        <div className={s.App}>
            {status === 'loading' ? <Loading/> :
                <TodoList
                    value={"Задача 1"}
                    id={'1'}
                    zadachi={zadachi}
                    status={status}
                    clickCheckBox={clickCheckBox}
                    clickRemoveBtn={clickRemoveBtn}
                />}
        </div>
    );
}

export default App;
