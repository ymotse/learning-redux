
// Action Types:
export const Types = {
    LOADER: 'string/LOADER'
}



// Reducers: 
const initialState = {
    name: ''
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case Types.LOADER:
            return {
                name: state.name + ' => ' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
            }
        default:
            return state
    }
}



// Action Creators:
export function increment_string () {
    return {
        type: Types.LOADER
    }
}
