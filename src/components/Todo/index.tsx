import * as React from 'react';
import { connect } from 'react-redux';
import { ActionCreator } from 'redux';
import { ITodoModel, ITodoAction, ITodo, ITodoFilter } from '../../models';
import { read, create, update, _delete, updatetodo, filterupdate } from '../../redux/modules/todo';
import * as uuid from 'uuid';
import { Checkbox } from '@blueprintjs/core'


type TodoProps =
    {
        todo: ITodo,
        read: ActionCreator<ITodoAction>,
        create: ActionCreator<ITodoAction>,
        update: ActionCreator<ITodoAction>,
        _delete: ActionCreator<ITodoAction>,
        updatetodo: ActionCreator<ITodoAction>,
        filterupdate: ActionCreator<ITodoAction>
    }

type TodoState = void;

export class TodoComponent extends React.Component<TodoProps, TodoState> {
    render() {
        const {todo, read, create, update, _delete, updatetodo, filterupdate} = this.props;
        let strike = (isDone: boolean) => {
            if (isDone) {
                return {
                    'text-decoration': 'line-through'
                };
            } else {
                return {
                    'text-decoration': 'none'
                };
            }
        }
        return (
            <div className="box">
                <div className="row">
                    <div className="col-xs">
                        <label className="pt-label modifier pt-inline ">
                            Tasks
                        <input className="pt-input" type="text" placeholder="To Do..." dir="auto" onChange={(e) => updatetodo({
                                id: '',
                                text: e.currentTarget.value,
                                completed: false
                            })} value={todo.todo.text} />
                            <button type="button" className="pt-button pt-icon-add" onClick={(e) => create({
                                id: uuid.v4(),
                                text: todo.todo.text,
                                completed: todo.todo.completed
                            })} />
                        </label>
                    </div>

                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {todo.todos.map((todo) => {
                            return (
                                <div>
                                    <div className="row">
                                        <div className="col-xs-offset-1 col-xs-9">
                                            <button type="button" className="pt-button pt-icon-confirm" onClick={(e) => update({
                                                id: todo.id,
                                                text: todo.text,
                                                completed: !todo.completed
                                            })} />

                                            <span style={strike(todo.completed)}>{todo.text}</span>
                                        </div>
                                        <div className="col-xs-2">
                                            <span>
                                                <button type="button" className="pt-button pt-icon-delete" onClick={(e) => _delete(todo)} />
                                            </span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            filterupdate('ALL');
                        } }>All</a>
                    </div>
                    <div className="col-xs">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            filterupdate('COMPLETED');
                        } }>Completed</a>
                    </div>
                    <div className="col-xs">
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            filterupdate('ACTIVE');
                        } }>Active</a>
                    </div>
                </div>
            </div>
        );
    }
}

const getFilteredToDo = (filter: ITodoFilter, todos: ITodoModel[]) => {
    switch (filter) {
        case 'ALL':
            return todos;
        case 'COMPLETED':
            console.log('completed');
            return todos.filter((item) => {
                return item.completed;
            });
        case 'ACTIVE':
            return todos.filter((item) => {
                return !item.completed;
            });
    }
};

export const Todo = connect(
    // (state) => ({ todo: state.todo }),
    (state) => ({
        todo: {
            todo: state.todo.todo,
            todos: getFilteredToDo(state.todo.filter, state.todo.todos),
            filter: state.todo.filter
        }
    }),
    (dispatch) => (
        {
            create: (todo) => dispatch(create(todo)),
            read: () => dispatch(read()),
            update: (todo) => dispatch(update(todo)),
            _delete: (todo) => dispatch(_delete(todo)),
            updatetodo: (todo) => dispatch(updatetodo(todo)),
            filterupdate: (filter) => dispatch(filterupdate(filter))
        }
    )
)(TodoComponent);
