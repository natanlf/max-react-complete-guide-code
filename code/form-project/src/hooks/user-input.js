import { useReducer } from "react";

const initialInputState = {
    value: '',
    isTouched: false
}

/* state = is a snapshot of state used in the component re-render.
   action is passed to function when dispatched was triggered
*/
const inputStateReducer = (state, action) => {
    if(action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched }
    }
    if(action.type === 'BLUR') {
        return { isTouched: true, value: state.value }
    }
    if(action.type === 'RESET') {
        return { isTouched: false, value: '' }
    }
    return inputStateReducer;
}

const useInput = (validateValue) => {
    /* inputStateReducer is the function that is triggered automatically once an action is dipatched - 
    it receives the latest state snapshot and should return the new, updated state.
    initialInputState is the initial state */
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value}); //dispatch this object to reducer function and this object is received there, is the action, the second parameter
    }

    const inputBlurHandler = event => {
        dispatch({type: 'BLUR'});
    }

    const reset = () => {
        dispatch({type: 'RESET'})
    }

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;