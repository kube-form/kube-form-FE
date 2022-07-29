import * as actionTypes from './actions';

export const initialState = {
    isLoggedIn: false,
    isInitialized: false,
    user: null,
    uid: null,
};

// eslint-disable-next-line default-param-last
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                isInitialized: true,
                user: action.payload.user,
                uid: action.payload.uid,
            };
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isInitialized: true,
                user: null,
                uid: null,
            };
        default:
            return state;
    }
};

export default accountReducer;
