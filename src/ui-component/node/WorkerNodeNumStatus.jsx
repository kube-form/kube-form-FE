import {
    Box,
    Typography,
    FormControl,
    MenuItem,
    Select,
    InputLabel,
} from '@mui/material';
import React, { useState } from 'react';

function WorkerNodeNumStatus() {
    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(0);
    };

    return (
        <Box sx={{ minHeight: 100 }}>
            <FormControl fullWidth>
                <Box>
                    <Typography variant="h4" noWrap>
                        worker node num
                    </Typography>
                    {/* <InputLabel id="selectContainer-label">
                        Worker Node Num
                    </InputLabel> */}

                    <Select
                        id="selectContainer"
                        value={value}
                        // label="Worker Node Num"
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
