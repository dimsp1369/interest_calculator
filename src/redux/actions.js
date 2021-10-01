import {CALCULATE_RESULT} from "./types";


export const calculateResult = (principal, rate, years) => ({
    type: CALCULATE_RESULT,
    payload: {principal, rate, years}
})
