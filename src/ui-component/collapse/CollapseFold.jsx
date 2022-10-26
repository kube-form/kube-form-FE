import React, { useState } from 'react';
import { Switch, Box, Collapse, FormControlLabel } from '@mui/material';

function CollapseFold() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    return (
        <Box>
            <FormControlLabel
                control={<Switch checked={open} onChange={handleOpen} />}
                label="Show"
            />
            <Collapse in={open}>hihi</Collapse>
        </Box>
    );
}

export default CollapseFold;
