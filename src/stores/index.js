import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import count from '../reducer/reducers/count'
import string from '../reducer/reducers/string'
import todos from '../reducer/reducers/todos'
import git from '../reducer/reducers/git'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    combineReducers({
        count,
        string,
        todos,
        git
    }),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
