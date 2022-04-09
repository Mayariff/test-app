import {addTodo, changeStatus, removeTodo, setTodos, todolistReducer} from './todoList-reducer';
import {InitialStateType} from './types';
import {zadachiType} from './index';


let startState: InitialStateType;
beforeEach(() => {
    startState = [
        {
            id: '1',
            text: 'foo',
            active: false
        },
        {
            id: '2',
            text: 'bar',
            active: false
        },
        {
            id: '3',
            text: 'foo-bar',
            active: true
        },
    ]
})

test('correct data should be received', () => {

    const endState = todolistReducer([], setTodos(startState))
    expect(endState.length).toBe(3)
})
test('zadacha should be added in TodoList', () => {

    const newZadacha: zadachiType = {
        id: '5',
        text: 'test',
        active: true
    }
    const endState = todolistReducer(startState, addTodo(newZadacha))

    expect(endState.length).toBe(4)
    expect(endState[0].text).toBe('test')
    expect(endState[1].text).toBe('foo')
})
test('status Active should be changed', () => {

    const endState = todolistReducer(startState, changeStatus('1', true))

    expect(endState.length).toBe(3)
    expect(endState[0].active).toBe(true)
    expect(endState[1].active).toBe(false)
})
test('zadacha should be removed', () => {

    const endState = todolistReducer(startState, removeTodo('1'))

    expect(endState.length).toBe(2)
    expect(endState[0].id).not.toEqual('1')
    expect(endState[0].text).toBe('bar')
})