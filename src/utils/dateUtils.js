import PropTypes from 'prop-types';
import moment from 'moment';
import koLocale from 'moment/locale/ko';

export default function getMomentFromNow(date) {
    moment.locale('kr', [koLocale]);
    return moment(date).fromNow();
}

getMomentFromNow.propTypes = {
    data: PropTypes.string.isRequired,
};
