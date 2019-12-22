import { takeLatest, put, call } from 'redux-saga/effects'
import axios from 'axios'


function apiGet () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, text: 'To do activity 1' },
                { id: 2, text: 'To do activity 2' },
                { id: 3, text: 'To do activity 3' },
            ])
        }, 1000)
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

        yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } })
    } catch (err) {
        yield put({ type: 'FAILURE_TODO_LIST', message: err.message })
    }
}

function* getGit (username) {
    try {
        const response = yield call(apiGit, username)
        
        yield put({ type: 'SUCCESS_GIT', payload: { data: response } })
    } catch (error) {
        yield put({ type: 'FAILURE_GIT', message: error.message })
    }
}


export default function* root () {
    yield [
        takeLatest('REQUEST_TODO_LIST', getTodoList),
        
        takeLatest('REQUEST_GIT', getGit),
        
        // takeEvery('REQUEST_TODO_LIST', getTodoList)
    ]
}
