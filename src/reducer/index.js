import { combineReducers } from 'redux'

import count from './reducers/count'
import string from './reducers/string'

export default combineReducers({
    count,
    string
})
