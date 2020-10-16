import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import count from './ducks/count'
import string from './ducks/string'
import todos from './ducks/todos'
import git from './ducks/git'
import name from './ducks/name'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        count,
        string,
        todos,
        git,
        name
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
