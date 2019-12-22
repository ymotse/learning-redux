import { takeLatest, put, call } from 'redux-saga/effects'

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

function* getTodoList () {
    try {
        const response = yield call(apiGet, null)

        yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response } })
    } catch (err) {
        yield put({ type: 'FAILURE_TODO_LIST', message: err.message })
    }
}

export default function* root () {
    yield [
        takeLatest('REQUEST_TODO_LIST', getTodoList),
    ]
}
