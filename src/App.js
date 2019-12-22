import React from 'react'

import { Provider } from 'react-redux'

import store from './stores'

import Counter from './components/Counter'
import String from './components/String'
import TodoList from './components/TodoList'

const App = () => {

    return (
        <div>
            <h2 style={{background:'#ccc'}}> Basic project to learning Redux and Saga </h2>
            
            <Provider store={store}>

                <Counter />
                <hr />
                <String />
                <hr />
                <TodoList />

            </Provider>
        </div>
    )
}

export default App
