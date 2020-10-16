// Action Types:
export const Types = {
    EDIT: 'name/EDIT'
}



// Reducers:
const initialState = {
    name: null
}

export default function name(state = initialState, action) {
    switch (action.type) {
        case Types.EDIT:
            return {
                name: action.name
            }
        default:
            return state
    }
}



// Action Creators:
export function changeName (name) {
    return {
        type: Types.EDIT,
        name
    }
}