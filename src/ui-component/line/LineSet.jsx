import React from 'react';
import Xarrow, { useXarrow } from 'react-xarrows';
import { useTheme } from '@mui/material/styles';
import usePods from 'hooks/usePods';

function LineSet() {
    const theme = useTheme();
    const { sub } = usePods();
    const borderSize = 4;
    const borderColor = theme.palette.text.primary;
    const updateXarrow = useXarrow();

    return (
        <>
            <Xarrow
                start="admin"
                startAnchor="bottom"
                end="main"
                showHead={false}
                endAnchor="left"
                strokeWidth={borderSize}
                color={borderColor}
                path="grid"
                showTail={false}
            />
            <Xarrow
                start="main"
                end="workernode1"
                path="grid"
                showHead={false}
                strokeWidth={borderSize}
                color={borderColor}
                showTail={false}
            />

            {sub.map((item) => (
                <Xarrow
                    key={item.id}
                    start={item.id}
                    startAnchor="right"
                    end="controller"
                    endAnchor="left"
                    path="grid"
                    showHead={null}
                    strokeWidth={borderSize}
                    color={borderColor}
                    headSize={4}
                />
            ))}
            <Xarrow
                start="controller"
                startAnchor="right"
                end="user"
                path="grid"
                strokeWidth={borderSize}
                color={borderColor}
                showHead={null}
            />
        </>
    );
}

export default LineSet;
