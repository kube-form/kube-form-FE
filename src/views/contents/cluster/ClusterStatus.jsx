import React, { useEffect } from 'react';

import NodeStatusContainer from 'ui-component/node/NodeStatusContainer';
import { Grid, Box, Button } from '@mui/material';
import MainWorkerNode from 'ui-component/node/MainWorkerNode';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';
import StatusBottomContainer from 'ui-component/bottomTab/StatusBottomContainer';
import LoadingComponent from 'ui-component/node/LoadingComponent';
import RightUserNode from 'ui-component/node/RightUserNode';
import usePods from 'hooks/usePods';
import IngressControllerNode from 'ui-component/node/IngressControllerNode';
import { useXarrow } from 'react-xarrows';

export default function Cluster() {
    const { workerNodeCnt, ingressStatus } = usePods();
    const updateXarrow = useXarrow();

    const onResize = () => {
        setTimeout(() => {
            updateXarrow();
        }, 400);
    };

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
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
                        <LoadingComponent />
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
                            {Object.keys(ingressStatus)
                                .sort(
                                    (a, b) => parseInt(a, 10) - parseInt(b, 10),
                                )
                                .map((item) => (
                                    <IngressControllerNode
                                        key={item}
                                        id={item}
                                    />
                                ))}
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
                        <Button
                            variant="contained"
                            size="large"
                            color="error"
                            // eslint-disable-next-line no-restricted-globals
                            onClick={() => confirm('정말로 삭제하시겠습니까?')}
                        >
                            Delete
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <LineSet />

            <Grid item xs={12}>
                <StatusBottomContainer />
            </Grid>
        </>
    );
}
