import React from 'react'
import { useReducer } from 'react'

const initialState = {count: 0}
const offset = 5

const myReducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + action.offsetVal}
        case "DECREMENT":
            return {...state, count: state.count - action.offsetVal}
        case "RESET":
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(myReducer, initialState)
    return (
        <div>
            <h1>Clicked {state.count} times</h1>
            <button onClick={()=>dispatch({type:"INCREMENT", offsetVal: offset})}>Increment</button>
            <button onClick={()=>dispatch({type:"DECREMENT", offsetVal: offset})}>Decrement</button>
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    )
}

export default Counter
