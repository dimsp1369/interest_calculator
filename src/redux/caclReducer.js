import {CALCULATE_RESULT} from "./types";


const initialState = {
    result: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CALCULATE_RESULT:
            const newResult = (action.payload.principal * (1 + ((action.payload.rate / 100) * action.payload.years))).toFixed(2)
            return {
                ...state,
                result: newResult
            }
        default:
            return state
    }
}

export default reducer
