import React from 'react';

import { Outlet } from 'react-router-dom';

// project imports
import Customization from '../Customization';

// ==============================|| MINIMAL LAYOUT ||============================== //

function MinimalLayout() {
    return (
        <>
            <Outlet />
            <Customization />
        </>
    );
}

export default MinimalLayout;
