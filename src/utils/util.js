import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment-timezone';

export function getMomentFromNow(date) {
    return moment(date).fromNow();
}

getMomentFromNow.propTypes = {
    data: PropTypes.string.isRequired,
};

export function tabAllyProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

tabAllyProps.propTypes = {
    index: PropTypes.number.isRequired,
};
