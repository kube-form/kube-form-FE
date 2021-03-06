import * as actionTypes from './actions';

export const initialState = {
    main: [],
    sub: [],
    wait: [],
};

// eslint-disable-next-line default-param-last
const podReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POD_INITIAL_ALL:
            return initialState;
        case actionTypes.POD_SET_WAIT:
            return { ...state, wait: action.payload };
        case actionTypes.POD_SET_SUB:
            return { ...state, sub: action.payload };
        case actionTypes.POD_SET_MAIN:
            return { ...state, main: action.payload };
        case actionTypes.POD_ADD_WAIT:
            return { ...state, wait: [...state.wait, action.payload] };
        default:
            return state;
    }
};

export default podReducer;
