import React, { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import usePods from 'hooks/usePods';
import { gridSpacing } from 'store/constant';
import { v4 as uuid } from 'uuid';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@material-ui/core';

import WaitContainer from 'ui-component/bottomTab/WaitContainer';
import NodeContainer from 'ui-component/middleTab/NodeContainer';

import RightView from 'ui-component/middleTab/RightView';
// import { Column } from 'ui-component/middleTab/Column';
import CableIcon from '@mui/icons-material/Cable';

import LineTo, { SteppedLineTo } from 'react-lineto';

const Items = [
    {
        id: uuid(),
        content: 'Tomcat',
    },
    {
        id: uuid(),
        content: 'Java',
    },
    {
        id: uuid(),
        content: 'Debian',
    },
    {
        id: uuid(),
        content: 'PHP',
    },
    {
        id: uuid(),
        content: 'MySQL',
    },
    {
        id: uuid(),
        content: 'Ubuntu',
    },
    {
        id: uuid(),
        content: 'React',
    },
    {
        id: uuid(),
        content: 'Node.js',
    },
    {
        id: uuid(),
        content: 'Flask',
    },
];

export default function Cluster() {
    const pods = usePods();
    const [items, setItems] = useState([]);
    const theme = useTheme();

    const getDummyData = async () => {
        setTimeout(() => {
            pods.setWait(Items);
        }, 1000);
    };

    const onDragEnd = (result) => {
        const { destination, source } = result;

        // 올바른 droppable 위에 두지 않았으므로 그냥 리턴
        if (!destination) return;

        // 같은자리에 두면 그냥 리턴
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const start = source.droppableId;
        const finish = destination.droppableId;
        if (start === 'area' && start === finish) {
            // console.log('==');
            // setItems(reorder(items, source.index, destination.index));
        }
        if (start === 'wait') {
            if (finish === 'main') {
                pods.addMainFromWait(source.index);
            } else if (finish === 'sub') {
                pods.addSubFromWait(source.index);
            } else if (start === finish) {
                pods.reorder(source.index, destination.index);
            }
            // copy(Items, items, source, destination);
        }
        if (finish === 'remove' || finish === 'wait') {
            if (start === 'main') {
                pods.removeMain(source.index);
            } else if (start === 'sub') {
                pods.removeSub(source.index);
            }
        }
    };

    useEffect(() => {
        getDummyData();
    }, []);
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Grid container>
                <Grid item xs={gridSpacing}>
                    admin img + arrow
                </Grid>
                <Grid item xs={gridSpacing}>
                    main
                </Grid>
                <Grid item xs={gridSpacing}>
                    <NodeContainer />
                    {/* <Column items={pods.sub} droppableId="sub" /> */}
                </Grid>
                <Grid item xs={gridSpacing}>
                    <CableIcon
                        className="Cable"
                        sx={{
                            m: 2,
                            fontSize: 50,
                            color: theme.palette.secondary[200],
                        }}
                    />
                    <div className="test">test</div>
                </Grid>
                {console.log(pods.sub)}
                {pods.sub.map((item) => (
                    <SteppedLineTo
                        delay={0}
                        borderColor="#000"
                        borderStyle="solid"
                        // 점선 : dashed
                        key={item.id}
                        from="test"
                        to={item.id}
                        orientation="h"
                    />
                ))}
                {pods.sub.map((item) => (
                    <LineTo
                        delay={0}
                        borderColor="#000"
                        borderStyle="solid"
                        // 점선 : dashed
                        key={item.id}
                        from="test"
                        to={item.id}
                        orientation="h"
                    />
                ))}
            </Grid>
            <Grid item xs={12}>
                <WaitContainer />
            </Grid>
        </DragDropContext>
    );
}
