import useAuth from 'hooks/useAuth';

import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';

// ==============================|| MENU ITEMS ||============================== //

// const menuItems = {
//     items: [dashboard, pages, utilities, other],
// };
const MenuItems = () => {
    const auth = useAuth();
    if (auth.isLoggedIn) {
        return { items: [dashboard, utilities, other] };
    }
    return {
        items: [dashboard, pages, utilities, other],
    };
};

export default MenuItems;
