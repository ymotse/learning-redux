import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from '../actions/todos';

const TodoList = ({ todos, requestTodoList }) => (
    <div>
        <h4>Using Redux-Saga</h4>
        <ul>
            {todos.data.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
        <button onClick={() => requestTodoList()}>Carregar todos</button>
        {todos.loading && <p>Carregando...</p>}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
