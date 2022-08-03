import React from 'react';
import Xarrow, { useXarrow } from 'react-xarrows';
import { useTheme } from '@mui/material/styles';
import usePods from 'hooks/usePods';

function LineSet() {
    const theme = useTheme();
    const { sub, workerNodeCnt } = usePods();
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
            {Array(workerNodeCnt + 1)
                .fill(1)
                .map((item, index) => (
                    <Xarrow
                        start="main"
                        // eslint-disable-next-line react/no-array-index-key
                        key={`workernode${index}`}
                        end={`workernode${index}`}
                        path="grid"
                        startAnchor="right"
                        endAnchor="left"
                        showHead={false}
                        strokeWidth={borderSize}
                        color={borderColor}
                        showTail={false}
                    />
                ))}
            {sub.map((item, index) => {
                return item.map((childItem) => {
                    return (
                        <Xarrow
                            key={childItem.draggableId}
                            start={childItem.draggableId}
                            startAnchor="right"
                            end="controller"
                            endAnchor="left"
                            path="grid"
                            showHead={null}
                            strokeWidth={borderSize}
                            color={borderColor}
                            headSize={4}
                        />
                    );
                });
            })}

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
