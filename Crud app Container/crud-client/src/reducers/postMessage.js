import { ACTION_TYPES } from "../actions/postMessage";

const initialState = {
    list: []
}

//postMessage List

export const postMessage = (action, state = initialState) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state;
    }
}