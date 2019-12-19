import React from 'react'

import { Provider } from 'react-redux'

import store from './stores'

import Counter from './Counter'


const App = () => {

    return (
        <div>
            <Provider store={store}>

                <Counter />

            </Provider>
        </div>
    )
}

export default App
