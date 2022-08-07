import { GA4React } from 'ga-4-react';
import config from 'config';

const ga4react = new GA4React(config.firebase.measurementId).initialize();

const trackPathForAnalytics = (data) => {
    const { path, search, title } = data;
    ga4react
        .then((ga) => {
            ga.pageview(path, search, title);
        })
        .catch((err) => console.error(`Analytics failed: ${err}`));
};

export default trackPathForAnalytics;
