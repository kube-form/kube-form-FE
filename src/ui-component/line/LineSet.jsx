import React from 'react';
import Xarrow, { useXarrow } from 'react-xarrows';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function LineSet() {
    const theme = useTheme();
    const updateXarrow = useXarrow();

    return (
        <>
            <Xarrow
                start="eks_user"
                startAnchor="bottom"
                end="eks_main"
                endAnchor="left"
                // labels={
                //     <Typography variant="h4" sx={{ marginTop: 15 }}>
                //         Kubectl
                //     </Typography>
                // }
                color={theme.palette.text.primary}
                path="grid"
                animateDrawing
                showTail={false}
            />
            <Xarrow
                start="eks_main"
                end="eks_sub"
                animateDrawing
                path="grid"
                color={theme.palette.text.primary}
                // showHead={false}
                showTail={false}
            />
        </>
    );
}

export default LineSet;
