import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { FirebaseProvider } from 'contexts/FirebaseContext';

import trackPathForAnalytics from 'TrackPageForAnalytics';
// ==============================|| APP ||============================== //

function App() {
    const { pathname, search } = useLocation();
    const analytics = useCallback(() => {
        trackPathForAnalytics({
            path: pathname,
            search,
            title: pathname.split('/')[1],
        });
    }, [pathname, search]);

    useEffect(() => {
        analytics();
    }, [analytics]);
    const customization = useSelector((state) => state.customization);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <FirebaseProvider>
                        <Routes />
                    </FirebaseProvider>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;
