// reducers.js
import { combineReducers } from 'redux';
import { SOME_ACTION_SUCCESS, START_LOADER } from './action';

const initialState = {
    data: null,
    loader:0
};

const someReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADER:
            return{
                ...state,
                loader:1
            }
        case SOME_ACTION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loader:0
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    someReducer,
    // Add more reducers here if needed
});

export default rootReducer;
