import React, { Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component) =>
    function (props) {
        return (
            <Suspense fallback={<Loader />}>
                <Component {...props} />
            </Suspense>
        );
    };

export default Loadable;
