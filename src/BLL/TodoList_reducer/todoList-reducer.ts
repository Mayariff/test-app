import {Dispatch} from 'redux';
import {v1} from 'uuid';
import {ActionsType, ADD_TODO, InitialStateType, REMOVE_TODO, SET_TODOS, UPDATE_STATUS} from './types';
import {appActions} from '../App_reducer';
import {zadachiType} from './index';
import {todoApi} from '../../API/todo-api';

const {setAppStatus, setAppError} = appActions

const initialState = [] as InitialStateType


export const todolistReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_TODOS: {
            return action.todos
        }
        case ADD_TODO: {
            return [action.todo, ...state]
        }
        case UPDATE_STATUS: {
            return state.map(td => td.id === action.payload.id ? {...td, active: action.payload.active} : td)
        }
        case REMOVE_TODO: {
            return state.filter(td => td.id !== action.id)
        }
        default:
            return state;
    }
}

//action creators
export const setTodos = (todos: Array<zadachiType>) => ({type: SET_TODOS, todos} as const)
export const addTodo = (todo: zadachiType) => ({type: ADD_TODO, todo} as const)
export const changeStatus = (id: string, active: boolean) => ({type: UPDATE_STATUS, payload:{id, active}} as const)
export const removeTodo = (id: string) => ({type: REMOVE_TODO, id} as const)




// thunk creators
export const fetchTodolistsTC = () => async (dispatch: Dispatch) => {
    try {
        dispatch(setAppStatus('loading'))
        const res = await todoApi.getTodoZadachi()
        dispatch(setTodos(res))
    } catch (err) {
        dispatch(setAppError('Задачи не загружены. Попробуйте позже'))
    } finally {
        dispatch(setAppStatus('succeeded'))
    }
}
export const addTodoTC = (text: string) => (dispatch: Dispatch) => {
    //хотела сохранить чистоту рельюсера, поэтому рандомное присваивание id вынесла в санку+ она потом будет нужна для отправки на сервер
    const newZadacha: zadachiType = {
        text,
        active: false,
        id: v1()
    }
    dispatch(addTodo(newZadacha))
}