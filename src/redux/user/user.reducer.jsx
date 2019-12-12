import { UserActionTypes } from './user.types';

// default value for user state - if state is not defined or requires a reset
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action)  => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:  // this is the action type
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;  // if no matches just return the state
    }
}

export default userReducer;