import {applyMiddleware, combineReducers, createStore} from 'redux';
import {todolistReducer} from '../BLL/TodoList_reducer/todoList-reducer';
import {appReducer} from '../BLL/App_reducer/app-reducer';
import {TypedUseSelectorHook, useSelector} from 'react-redux';
import thunkMiddleware from 'redux-thunk'

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
export const rootReducer = combineReducers({
    todoList: todolistReducer,
    app: appReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//хук, который автоматически подставляет типизацию рутового стейта
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;

