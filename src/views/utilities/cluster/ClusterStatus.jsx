import React from 'react';

import NodeStatusContainer from 'ui-component/node/NodeStatusContainer';
import { Grid, Box } from '@material-ui/core';
import MainWorkerNode from 'ui-component/node/MainWorkerNode';
import LeftUserNode from 'ui-component/node/LeftUserNode';
import LineSet from 'ui-component/line/LineSet';
import StatusBottomContainer from 'ui-component/bottomTab/StatusBottomContainer';

export default function Cluster() {
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
                        <Box sx={{ minHeight: 100 }} />
                        <LeftUserNode className="admin" />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        alignItems="center"
                        style={{ display: 'flex' }}
                    >
                        <MainWorkerNode className="main" />
                    </Grid>
                    <Grid item xs={6} id="sub">
                        <NodeStatusContainer />
                    </Grid>
                </Grid>
            </Box>

            <LineSet />

            <Grid item xs={12}>
                {/* <WaitContainer /> */}
                <StatusBottomContainer />
            </Grid>
        </>
    );
}
