import React from 'react'

import { Provider } from 'react-redux'

import store from './stores'

import Counter from './components/Counter'
import String from './components/String'
import TodoList from './components/TodoList'
import Git from './components/Git'

const App = () => {

    return (
        <div>
            <h3 style={{background:'rgba(177, 192, 202, 0.66)'}}>Example to learning Redux</h3>
            <hr />
            <Provider store={store}>
                <Counter />
                <hr />
                <String />
                <hr />
                <TodoList />
                <hr />
                <Git />
            </Provider>
        </div>
    )
}

export default App
