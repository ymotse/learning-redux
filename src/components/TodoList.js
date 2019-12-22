import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { requestTodoList } from '../store/ducks/todos'

const TodoList = ({ todos, requestTodoList }) => (
    <div>
        <h3 style={{background:'rgba(207, 235, 255, 0.66)'}}>Using Redux-Saga</h3>
        
        <ul>
            {todos.data.map(todo => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
        <button onClick={requestTodoList}>Carregar todos</button>
        {todos.loading && <p>Carregando...</p>}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators({ requestTodoList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
