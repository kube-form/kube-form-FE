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

    const reorder = (startIndex, endIndex) => {
        const result = [...container.wait];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        setWait(result);
    };

    // wait -> sub
    const addSubFromWait = (subNodeIndex, waitIdx) => {
        try {
            const item = container.wait[waitIdx];
            const subs = [...container.sub];
            if (subs[subNodeIndex].find(({ url }) => url === item.url)) {
                throw new Error('duplicate container');
            }
            subs[subNodeIndex].push({ ...item, id: uuid() });
            dispatch({
                type: actionTypes.POD_SET_SUB,
                payload: subs,
            });
        } catch (e) {
            alert('duplicated container');
            console.warn('wait out of index', e);
        }
    };

    const addWait = (pod) => {
        try {
            dispatch({
                type: actionTypes.POD_ADD_WAIT,
                payload: pod,
            });
        } catch (e) {
            console.warn('add wait error', e);
        }
    };

    // remove subIdx: sub pod index
    const removeSub = (subNodeIndex, subIdx) => {
        const subs = [...container.sub];

        try {
            subs[subNodeIndex].splice(subIdx, 1);
            dispatch({ type: actionTypes.POD_SET_SUB, payload: subs });
        } catch (e) {
            console.warn('sub out of index', e);
        }
    };

    // set worker node set
    const setWorkerNodeCnt = (cnt) => {
        try {
            if (cnt <= -1 || cnt >= 3) {
                throw new Error('invalid worker node cnt');
            }
            dispatch({
                type: actionTypes.POD_SET_WORKER_NODE_CNT,
                payload: cnt,
            });
        } catch (e) {
            console.warn('worker node cnt invalid');
        }
    };

    return {
        ...container,
        initAll,
        addWait,
        reorder,
        setWait,
        addSubFromWait,
        removeSub,
        setWorkerNodeCnt,
    };
};

export default usePods;
