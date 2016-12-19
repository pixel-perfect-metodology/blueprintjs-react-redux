import { ITodoModel, ITodoAction, ITodo, ITodoFilter } from './model'
import * as _ from 'lodash';
import * as uuid from 'uuid';


export const InitialState: ITodo = {
    todos: <ITodoModel[]>[],
    todo: {
        id: '',
        text: '',
        completed: false
    },
    filter: 'ALL'
};

export const todoReducer = (state = InitialState, action: ITodoAction) => {
    console.log(action.type);
    switch (action.type) {
        case 'READ_TODO':
            return state;
        case 'UPDATE_TODO':
            let i = _.findIndex(state.todos, (todo) => {
                return todo.id === (<ITodoModel>action.payload).id
            });
            return {
                ...state,
                todos: [...state.todos.slice(0, i), <ITodoModel>action.payload, ...state.todos.slice(i + 1)]
            }
        case 'CREATE_TODO':
            return {
                ...state,
                todos: [...state.todos, <ITodoModel>action.payload],
                todo: {
                    id: 0,
                    text: '',
                    completed: false
                }
            };
        case 'DELETE_TODO':
            let resultIndex = _.findIndex(state.todos, (item) => {
                return (item).id === (<ITodoModel>action.payload).id
            });

            if (resultIndex !== -1) {
                return {
                    ...state,
                    todos: [...state.todos.slice(0, resultIndex), ...state.todos.slice(resultIndex + 1)]
                };
            } else
                return state;

        case 'UPDATE_SINGLE_TODO':
            return {
                ...state,
                todo: {
                    id: (<ITodoModel>action.payload).id,
                    text: (<ITodoModel>action.payload).text,
                    completed: (<ITodoModel>action.payload).completed
                }
            };
        case 'FILTER_TODO': return {
            ...state,
            filter: (<ITodoFilter>action.payload)
        }
        default:
            return state;
    }
}

/**Action Creators */

export const read = (): ITodoAction => ({
    type: 'READ_TODO'
});

export const update = (todo: ITodoModel): ITodoAction => ({
    type: 'UPDATE_TODO',
    payload: todo
});

export const _delete = (todo: ITodoModel): ITodoAction => ({
    type: 'DELETE_TODO',
    payload: todo
});

export const create = (todo: ITodoModel): ITodoAction => ({
    type: 'CREATE_TODO',
    payload: todo
});

export const updatetodo = (todo: ITodoModel): ITodoAction => ({
    type: 'UPDATE_SINGLE_TODO',
    payload: todo
});

export const filterupdate = (filter: string): ITodoAction => ({
    type: 'FILTER_TODO',
    payload: <ITodoFilter>filter
});