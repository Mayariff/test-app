import {addTodo, changeStatus, removeTodo, setTodos} from './todoList-reducer';

export const SET_TODOS = 'todolistReducer/set_todos/polychit_zadachi'
export const ADD_TODO = 'todolistReducer/add_todo/dobavit_zadachy'
export const UPDATE_STATUS = 'todolistReducer/update_todo-status/izmenit_status_zadachi'
export const REMOVE_TODO = 'todolistReducer/remove_todo/ydalit_zadachi'


export type zadachiType = {
    id: string,
    text: string,
    active: boolean
}
export type InitialStateType = Array<zadachiType>

export type ActionsType = ReturnType<typeof setTodos> | ReturnType<typeof addTodo>
    | ReturnType<typeof changeStatus> | ReturnType<typeof removeTodo>