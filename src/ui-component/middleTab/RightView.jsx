import React from 'react';
import { Grid } from '@material-ui/core';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import CableIcon from '@mui/icons-material/Cable';
import { useTheme } from '@mui/material/styles';

import LineTo, { SteppedLineTo } from 'react-lineto';

function RightView() {
    const theme = useTheme();
    return (
        <Grid>
            <CableIcon
                className="Cable"
                sx={{
                    m: 2,
                    fontSize: 50,
                    color: theme.palette.secondary[200],
                }}
            />
            <AccessibilityNewIcon
                className="User"
                sx={{
                    fontSize: 70,
                    color: theme.palette.primary[800],
                }}
            />
            <LineTo
                delay={0}
                from="Cable"
                to="User"
                borderColor={theme.palette.dark[900]}
            />
        </Grid>
    );
}

export default RightView;
