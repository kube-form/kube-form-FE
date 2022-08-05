import React, { useEffect, useState } from 'react';
import Xarrow, { useXarrow } from 'react-xarrows';
import { useTheme } from '@mui/material/styles';
import usePods from 'hooks/usePods';
import { generateColor, generatePercent } from 'utils/line/lineUtil';

function LineSet() {
    const theme = useTheme();
    const [isLoading, setLoading] = useState(true);
    const { sub, workerNodeCnt, ingressStatus } = usePods();
    const borderSize = 4;
    const borderColor = theme.palette.text.primary;
    const updateXarrow = useXarrow();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, [sub]);

    if (isLoading) {
        return <></>;
    }

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
            {[...Array(workerNodeCnt + 1)].map((item, index) => (
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
            <>
                {[...Array(workerNodeCnt + 1)].map((_, index) => {
                    return sub[index].map((item) => {
                        return (
                            <Xarrow
                                key={`controllerToUser${item.draggableId}`}
                                start={item.draggableId}
                                startAnchor="right"
                                end={`controller${item.id}`}
                                endAnchor="left"
                                path="grid"
                                showHead={null}
                                strokeWidth={borderSize}
                                headSize={4}
                                // color={borderColor}
                                color={generateColor(item.url)}
                                gridBreak={generatePercent(item.id)}
                            />
                        );
                    });
                })}
            </>
            <>
                {Object.keys(ingressStatus).map((item) => {
                    return (
                        <Xarrow
                            key={`controllerToUser${item}`}
                            start={`controller${item}`}
                            startAnchor="right"
                            end="user"
                            endAnchor="left"
                            path="grid"
                            strokeWidth={borderSize}
                            color={borderColor}
                            showHead={null}
                            // color={generateColor(item)}
                        />
                    );
                })}
            </>
        </>
    );
}

export default LineSet;
