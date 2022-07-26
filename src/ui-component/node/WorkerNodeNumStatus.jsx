import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from '@mui/material';
import usePods from 'hooks/usePods';
import React, { useState } from 'react';

function WorkerNodeNumStatus() {
    const { setWorkerNodeCnt, workerNodeCnt } = usePods();

    const handleChange = (event) => {
        setWorkerNodeCnt(parseInt(event.target.value, 10));
    };

    return (
        <Box sx={{ minHeight: 80 }}>
            <FormControl fullWidth>
                <Box>
                    <Typography variant="h4" noWrap>
                        worker node num
                    </Typography>

                    <Select
                        id="selectContainer"
                        value={workerNodeCnt}
                        onChange={handleChange}
                        fullWidth
                    >
                        {Array(3)
                            .fill(1)
                            .map((item, index) => (
                                <MenuItem value={index}>{index + 1}</MenuItem>
                            ))}
                    </Select>
                </Box>
            </FormControl>
        </Box>
    );
}

export default WorkerNodeNumStatus;
