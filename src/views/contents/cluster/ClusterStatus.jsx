import React, { useEffect, useState } from 'react';

import NodeStatusContainer from 'ui-component/node/NodeStatusContainer';
import { Grid, Box, Button } from '@mui/material';
import MainWorkerNode from 'ui-component/node/MainWorkerNode';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';
import StatusBottomContainer from 'ui-component/bottomTab/StatusBottomContainer';
import LoadingComponent from 'ui-component/node/LoadingComponent';
import RightUserNode from 'ui-component/node/RightUserNode';
import usePods from 'hooks/usePods';
import { useXarrow } from 'react-xarrows';
import IngressControllerWithDialog from 'ui-component/dialog/IngressControllerWithDialog';
import { getKubeSource, deleteKubeSource } from 'utils/s3Util';
import useAuth from 'hooks/useAuth';
import ClusterDeleteButtonWithDialog from 'ui-component/dialog/ClusterDeleteButtonWithDialog';
import { useSelector } from 'react-redux';

import DUMMY_DATA from 'data/status';
import { deleteClusterStatus, getClusterStatus } from 'api/cluster';
import { SettingsInputComponentSharp } from '@material-ui/icons';

function ClusterStatus() {
    const { user } = useAuth();
    const { setAll, setInit } = usePods();
    const [tmp, setTmp] = useState();
    const { sub, workerNodeCnt } = useSelector((state) => state.pod);
    const updateXarrow = useXarrow();
    const { data } = getClusterStatus(user?.uid);

    useEffect(async () => {
        try {
            const { client } = await getKubeSource({
                uid: user.uid,
                id: 'main.json',
            });

            const tm = client.sub.flat();
            setTmp(
                tm.filter((a, i) => tm.findIndex((s) => s.id === a.id) === i),
            );
            setAll(client);
        } catch (e) {
            console.log(e);
            setInit();
        }
    }, []);

    const onDelete = async () => {
        const res = await deleteClusterStatus(user.uid);
        // const res = await deleteKubeSource({ uid: user.uid, id: 'main.json' });
        await setInit();
    };

    return (
        <>
            <Box py={2}>
                <Grid container>
                    <Grid
                        item
                        xs={2}
                        container
                        direction="column"
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}
                    >
                        {data && <LoadingComponent status={data} />}
                        <LeftUserNode className="admin" />
                    </Grid>
                    <Grid
                        item
                        xs={3}
                        container
                        alignItems="center"
                        style={{ display: 'flex' }}
                    >
                        <MainWorkerNode className="main" />
                    </Grid>
                    <Grid item xs={4} id="sub">
                        {[...Array(workerNodeCnt + 1)].map((item, index) => (
                            <NodeStatusContainer
                                // eslint-disable-next-line react/no-array-index-key
                                key={index}
                                id={index}
                                nodeIndex={index}
                                sub={sub[index]}
                            />
                        ))}
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        container
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box padding={3}>
                            {sub.flat() &&
                                tmp &&
                                Array.from(
                                    new Set(
                                        sub
                                            .slice(0, workerNodeCnt + 1)
                                            .flat()
                                            .map((item) => item.id),
                                    ),
                                ).map((itemz) => {
                                    const item = tmp.find(
                                        (item1) => item1.id === itemz,
                                    );
                                    if (item) {
                                        return (
                                            // 나중에 꼭 말해서 수정해야함.
                                            <IngressControllerWithDialog
                                                key={item.id}
                                                id={item.id}
                                                url={
                                                    data?.data?.data &&
                                                    data.data.data.entry_points.find(
                                                        (itemf) =>
                                                            itemf.name ===
                                                            item.name,
                                                    ).entry_point
                                                }
                                            />
                                        );
                                    }
                                    return <></>;
                                })}
                            {/* {Object.keys(ingressStatus).map((item) => (
                                <IngressControllerWithDialog
                                    key={item}
                                    url="https://www.notion.so/Front-2e7850ada3b14943bc24d38522262569"
                                    id={item}
                                />
                            ))} */}
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={2}
                        container
                        direction="column"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <RightUserNode />
                    </Grid>
                </Grid>
            </Box>

            <Grid
                xs={12}
                container
                style={{
                    display: 'flex',
                }}
            >
                <Grid item xs={10} />
                <Grid item xs={2}>
                    <Box my={2}>
                        <ClusterDeleteButtonWithDialog onDelete={onDelete} />
                    </Box>
                </Grid>
            </Grid>

            <LineSet />

            <Grid item xs={12}>
                {data?.data && <StatusBottomContainer statusData={data.data} />}
            </Grid>
        </>
    );
}

export default ClusterStatus;
