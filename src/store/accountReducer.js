import * as actionTypes from './actions';

export const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
};

// eslint-disable-next-line default-param-last
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                isInitialized: true,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isInitialized: true,
            };
        default:
            return state;
    }
};

export default accountReducer;
