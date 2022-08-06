import React from 'react';

import NodeStatusContainer from 'ui-component/node/NodeStatusContainer';
import { Grid, Box } from '@material-ui/core';
import MainWorkerNode from 'ui-component/node/MainWorkerNode';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';
import StatusBottomContainer from 'ui-component/bottomTab/StatusBottomContainer';
import LoadingComponent from 'ui-component/node/LoadingComponent';
import RightUserNode from 'ui-component/node/RightUserNode';
import usePods from 'hooks/usePods';
import IngressControllerNode from 'ui-component/node/IngressControllerNode';

function ClusterStatus() {
    const { workerNodeCnt } = usePods();

    return (
        <>
            <Box py={2}>
                <Grid container>
                    <Grid
                        item
                        xs={2}
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
                        alignItems="center"
                        style={{ display: 'flex' }}
                    >
                        <MainWorkerNode className="main" />
                    </Grid>
                    <Grid item xs={4} id="sub">
                        {Array(workerNodeCnt + 1)
                            .fill(1)
                            .map((item, index) => (
                                <NodeStatusContainer
                                    id={index}
                                    nodeIndex={index}
                                />
                            ))}
                    </Grid>
                    <Grid
                        item
                        xs={1}
                        direction="column"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box padding={3}>
                            <IngressControllerNode />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={2}
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

            <LineSet />

            <Grid item xs={12}>
                <StatusBottomContainer />
            </Grid>
        </>
    );
}

export default ClusterStatus;
