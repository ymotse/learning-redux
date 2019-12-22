
// Action Types:
export const Types = {
    INCREMENT: 'count/INCREMENT',
    DECREMENT: 'count/DECREMENT'
}



// Reducers: 
const initialState = {
    count: 0
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case Types.INCREMENT:
            return {
                count: state.count + 1
            }
        case Types.DECREMENT:
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}



// Action Creators: 
export function increment () {
    return {
        type: Types.INCREMENT
    }
}

export function decrement () {
    return {
        type: Types.DECREMENT
    }
}
