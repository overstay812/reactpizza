
const initialState = {
    a: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,}
        default: return state
    }
}