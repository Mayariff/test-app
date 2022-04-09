import * as todoSelectors from './selectors'
import {ActionsType, zadachiType as T1} from './types'
import {
    addTodo,
    addTodoTC,
    changeStatus,
    fetchTodolistsTC,
    removeTodo,
    setTodos,
    todolistReducer as TodolistReducer
} from "./todoList-reducer";


const todolistReducer = TodolistReducer


const todolistActions = {
    setTodos,
    addTodo,
    changeStatus,
    removeTodo,
    fetchTodolistsTC,
    addTodoTC
}
export type zadachiType = T1
export type todoActionType = ActionsType

export {
    todoSelectors,
    todolistReducer,
    todolistActions
}
