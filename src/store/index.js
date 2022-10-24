import { createStore } from 'redux';

const reducerFunction = (state = {counter : 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { counter: state.counter+1 };
        case 'DECREMENT':
            return { counter: state.counter-1 };
        case 'ADDBY10':
            return { counter: state.counter + action.payload }
        case 'REDUCEBY10':
            return { counter: state.counter - action.payload }
        default:
            return state;
    }
}

const store = createStore(reducerFunction);
export default store;