export type ITodoFilter = 'ALL' | 'COMPLETED' | 'ACTIVE'

export type ITodo = {
    todo: ITodoModel,
    todos: ITodoModel[],
    filter: ITodoFilter
}

export type ITodoModel = {
    id: string,
    text: string
    completed: boolean
}

export type ITodoAction = {
    type: 'CREATE_TODO' | 'READ_TODO' | 'UPDATE_TODO' | 'DELETE_TODO' | 'UPDATE_SINGLE_TODO' | 'FILTER_TODO',
    payload?: ITodoModel | ITodoFilter
}