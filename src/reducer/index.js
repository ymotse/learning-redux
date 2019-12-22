import { combineReducers } from 'redux'

import count from './reducers/count'
import string from './reducers/string'
import todos from './reducers/todos'

export default combineReducers({
    count,
    string,
    todos
})
