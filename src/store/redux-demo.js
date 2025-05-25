import { createStore, combineReducers } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

const authReducer = (state = { isAuthenticated: false }, action) => {
    switch (action.type) {
        case 'login':
            return { isAuthenticated: true };
        case 'logout':
            return { isAuthenticated: false };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
});

const store = createStore(rootReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

export default store;

