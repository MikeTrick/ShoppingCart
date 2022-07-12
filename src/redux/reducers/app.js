import {INITIAL_APP_STATE} from "../initial/state";

export const appReducer = (state = INITIAL_APP_STATE, {type, payload}) => {
    switch (type) {
        case 'SET_DISCOUNT': {
            return {
                ...state,
                discount: payload,
            }
        }
        default: return state
    }
}