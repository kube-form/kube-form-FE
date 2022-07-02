import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from 'store/actions';
import { v4 as uuid } from 'uuid';

const usePods = () => {
    const container = useSelector((state) => state.pod);
    const dispatch = useDispatch();

    // intialize all pods
    const initAll = () => {
        dispatch({ type: actionTypes.POD_INITIAL_ALL });
    };

    // pods: {id: string, content: string}
    const setWait = (wait) => {
        dispatch({ type: actionTypes.POD_SET_WAIT, payload: wait });
    };

    // wait -> main 일단 한 개로 고려
    const addMainFromWait = (waitIdx) => {
        try {
            const item = container.wait[waitIdx];
            dispatch({
                type: actionTypes.POD_SET_MAIN,
                payload: [{ ...item, id: uuid() }],
            });
        } catch (e) {
            console.warn('wait out of index', e);
        }
    };

    // wait -> sub
    const addSubFromWait = (waitIdx) => {
        try {
            const item = container.wait[waitIdx];
            const sub = [...container.sub];
            sub.push({ ...item, id: uuid() });
            dispatch({
                type: actionTypes.POD_SET_SUB,
                payload: sub,
            });
        } catch (e) {
            console.warn('wait out of index', e);
        }
    };

    // remove mainIdx: sub pod index
    const removeMain = (mainIdx) => {
        const main = [...container.main];
        try {
            main.splice(mainIdx, 1);
            dispatch({ type: actionTypes.POD_SET_MAIN, payload: main });
        } catch (e) {
            console.warn('sub out of index', e);
        }
    };

    // remove subIdx: sub pod index
    const removeSub = (subIdx) => {
        const sub = [...container.sub];
        try {
            sub.splice(subIdx, 1);
            dispatch({ type: actionTypes.POD_SET_SUB, payload: sub });
        } catch (e) {
            console.warn('sub out of index', e);
        }
    };

    return {
        ...container,
        initAll,
        setWait,
        addSubFromWait,
        addMainFromWait,
        removeSub,
        removeMain,
    };
};

export default usePods;