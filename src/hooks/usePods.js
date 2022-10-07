import { useEffect } from 'react';
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
            if (subs[subNodeIndex].find(({ id }) => id === item.id)) {
                throw new Error('duplicate container');
            }
            subs[subNodeIndex].push({ ...item, draggableId: uuid() });

            // subs[subNodeIndex] = subs[subNodeIndex].sort(
            //     (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10),
            // );

            const ingressStatus = { ...container.ingressStatus };
            ingressStatus[item.id] = ingressStatus[item.id]
                ? ingressStatus[item.id] + 1
                : 1;
            dispatch({
                type: actionTypes.POD_SET_SUB,
                payload: { subs, ingressStatus },
            });
        } catch (e) {
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

    const setAll = (data) => {
        try {
            dispatch({
                type: actionTypes.POD_SET_ALL,
                payload: data,
            });
        } catch (e) {
            console.warn('set All error', e);
        }
    };

    const setInit = () => {
        try {
            dispatch({
                type: actionTypes.POD_SET_INIT,
            });
        } catch (e) {
            console.warn('set Init error', e);
        }
    };

    const removeSub = (subNodeIndex, subIdx) => {
        const subs = [...container.sub];
        const item = subs[subNodeIndex][subIdx];
        const ingressStatus = { ...container.ingressStatus };

        if (ingressStatus[item.id] === 1) {
            delete ingressStatus[item.id];
        } else {
            ingressStatus[item.id] -= 1;
        }
        try {
            subs[subNodeIndex].splice(subIdx, 1);
            dispatch({
                type: actionTypes.POD_SET_SUB,
                payload: { subs, ingressStatus },
            });
        } catch (e) {
            console.warn('sub out of index', e);
        }
    };

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

    // register format
    const getSubmitFormat = () => {
        const subs = [...container.sub.slice(0, container.workerNodeCnt + 1)]
            .flat()
            .map((item) => ({
                ...item,
                replicas: 1,
                dockerURL: item.url,
                port: parseInt(item.port, 10),
            }));
        // const subs = [...Array(container.workerNodeCnt + 1)].map((_, index) =>
        //     container.sub[index].map((item) => ({ ...item, replicas: 1 })),
        // );
        const res = subs.reduce((arr, item) => {
            const index = arr.findIndex((element) => element.id === item.id);
            if (index === -1) {
                arr.push(item);
            } else {
                arr[index].replicas += 1;
            }
            return arr;
        }, []);
        return res;
    };

    return {
        ...container,
        initAll,
        addWait,
        reorder,
        setWait,
        setInit,
        setAll,
        addSubFromWait,
        removeSub,
        setWorkerNodeCnt,
        getSubmitFormat,
    };
};

export default usePods;
