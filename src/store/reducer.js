import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import podReducer from './podReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    pod: podReducer,
});

export default reducer;
