import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {calculateResult} from "../redux/actions";

const InterestCalculator = () => {
    const dispatch = useDispatch()
    const result = useSelector(state => state.calcReducer.result)
    const [principal, setPrincipal] = useState(0)
    const [rate, setRate] = useState(0)
    const [years, setYears] = useState(0)

    return (
        <div className="calculator">
            <input type="text" placeholder='principal' onChange={(e) => setPrincipal(Number(e.target.value))}/>
            <input type="text" placeholder='rate' onChange={(e) => setRate(Number(e.target.value))}/>
            <input type="text" placeholder='years' onChange={(e) => setYears(Number(e.target.value))}/>
            <button onClick={() => dispatch(calculateResult(principal, rate, years))}>Calculate</button>
             <h1> Your result - {result}</h1>
        </div>
    );
};

export default InterestCalculator;
