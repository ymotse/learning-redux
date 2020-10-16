
// Action Types:
export const Types = {
    REQUEST_GIT: 'git/REQUEST_GIT',
    SUCCESS_GIT: 'git/SUCCESS_GIT',
    FAILURE_GIT: 'git/FAILURE_GIT'
}



// Reducers:
const INITIAL_STATE = {
    data: {},
    error: false,
}

export default function git (state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case Types.REQUEST_GIT:
            return { ...state }
        case Types.SUCCESS_GIT:
            return { data: action.payload.data, error: false }
        case Types.FAILURE_GIT:
            return { data: {}, error: true }
        default:
            return state
    }
}



// Action Creators:
export function requestGit(username) {
    console.log('requestGit' , username)
    
    return {
        type: Types.REQUEST_GIT,
        username
    }
}

