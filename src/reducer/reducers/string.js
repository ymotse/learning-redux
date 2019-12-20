const initialState = {
    string: ''
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_STRING':
            return {
                string: state.string + ' => ' + Math.random().toString(6).substring(3, 5) + Math.random().toString(36).substring(1, 6)
            }
        default:
            return state
    }
}