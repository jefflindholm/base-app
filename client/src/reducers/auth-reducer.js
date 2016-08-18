import {
    LOGIN_PENDING,
    LOGIN_REJECTED,
    LOGIN_FULFILLED,
    LOGOUT_PENDING,
    LOGOUT_REJECTED,
    LOGOUT_FULFILLED,
} from '../constants/auth-constants';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    token: null,
    error: null,
    user: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
            return { ...state, loggingIn: true };
        case LOGIN_REJECTED:
            return { ...state, loggingIn: false, error: action.payload };
        case LOGIN_FULFILLED: {
            const data = action.payload.data;
            return { ...state, loggingIn: false, loggedIn: true, token: data.token, user: data.user };
        }

        case LOGOUT_REJECTED:
            return { ...state, error: action.payload };
        case LOGOUT_FULFILLED:
            return { ...state, loggedIn: false, token: null };

        case LOGOUT_PENDING:
        default:
            return state;
    }
};
export default reducer;
