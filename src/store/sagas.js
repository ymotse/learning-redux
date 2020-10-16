import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'

import { Types as type_todos } from './ducks/todos'
import { Types as type_git } from './ducks/git'


function apiGet () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'To do activity 1' },
                { id: 2, text: 'To do activity 2' },
                { id: 3, text: 'To do activity 3' },
            ])
        }, 500)
    })
}

function apiGit ({username}) {
    return axios({
        url: `https://api.github.com/users/${username}`
    })
    .then(r => r.data)
    .catch(e => e)
}



function* getTodoList () {
    try {
        const response = yield call(apiGet, null)

        yield put({ type: type_todos.SUCCESS_TODO_LIST , payload: { data: response } })
    } catch (err) {
        yield put({ type: type_todos.FAILURE_TODO_LIST, message: err.message })
    }
}

function* getGit (username) {
    console.log('getGit')
    
    try {
        const response = yield call(apiGit, username)
        
        yield put({ type: type_git.SUCCESS_GIT, payload: { data: response } })
    } catch (error) {
        yield put({ type: type_git.FAILURE_GIT, message: error.message })
    }
}


export default function* root () {
    yield [
        takeLatest(type_todos.REQUEST_TODO_LIST, getTodoList),
        takeLatest(type_git.REQUEST_GIT, getGit),
    ]
}
