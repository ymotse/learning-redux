
// Action Type:
export const Types = {
    REQUEST_TODO_LIST: 'todos/REQUEST_TODO_LIST',
    SUCCESS_TODO_LIST: 'todos/SUCCESS_TODO_LIST',
    FAILURE_TODO_LIST: 'todos/FAILURE_TODO_LIST'
}



// Reducers:
const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
}

export default function reducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.REQUEST_TODO_LIST:
            return { ...state, loading: true }
        case Types.SUCCESS_TODO_LIST:
            return { data: action.payload.data, loading: false, error: false }
        case Types.FAILURE_TODO_LIST:
            return { data: [], loading: false, error: true }
        default:
            return state
    }
}



// Action Creators:
export function requestTodoList () {
    return {
        type: Types.REQUEST_TODO_LIST,
    }
}
