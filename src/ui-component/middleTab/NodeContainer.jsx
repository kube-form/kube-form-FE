import React from 'react';
import usePods from 'hooks/usePods';
import { gridSpacing } from 'store/constant';

import { useTheme } from '@mui/material/styles';
import MainCard from 'ui-component/cards/MainCard';
import { CardContent, Grid, Typography } from '@mui/material';
import { Column } from './Column';

function NodeContainer({ items }) {
    const { sub } = usePods();
    const theme = useTheme();
    console.log(sub);

    return (
        <MainCard content={false}>
            <CardContent>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <Grid item>
                            <Typography variant="h4">
                                worker node area
                            </Typography>
                        </Grid>
                        <Column items={items} droppableId="sub" />
                        <Grid item>asdf</Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </MainCard>
    );
}

export default NodeContainer;
