const INITIAL_STATE = {
    data: {},
    error: false,
};

export default function git (state = INITIAL_STATE, action) {
    
    switch (action.type) {
        case 'REQUEST_GIT':
            return { ...state }
        case 'SUCCESS_GIT':
            return { data: action.payload.data, error: false }
        case 'FAILURE_GIT':
            return { data: {}, error: true }
        default:
            return state
    }
}
