import axios from 'axios';
import {zadachiType} from "../BLL/TodoList_reducer";


const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/falk20/demo/",
})

export const todoApi = {
    getTodoZadachi() {
        return instance.get<Array<zadachiType>>('todos').then(res => res.data);
    }
}
