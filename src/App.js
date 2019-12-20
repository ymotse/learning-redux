import React from 'react'

import { Provider } from 'react-redux'

import store from './stores'

import Counter from './components/Counter'
import String from './components/String'


const App = () => {

    return (
        <div>
            <h2 style={{background:'#ccc'}}> Basic project to learning Redux and Saga </h2>
            
            <Provider store={store}>

                <Counter />
                <hr />
                <String />
                <hr />

            </Provider>
        </div>
    )
}

export default App
