// default value for user state - if state is not defined or requires a reset
const INITIAL_STATE = {
    currentUser: null
};

const userReducer = (state = INITIAL_STATE, action)  => {
    switch (action.type) {
        case 'SET_CURRENT_USER':  // this is the action
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;  // if no matches just return the state
    }
}

export default userReducer;