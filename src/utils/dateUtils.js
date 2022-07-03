import PropTypes from 'prop-types';

import moment from 'moment';
import 'moment-timezone';

export default function getMomentFromNow(date) {
    return moment(date).fromNow();
}

getMomentFromNow.propTypes = {
    data: PropTypes.string.isRequired,
};
