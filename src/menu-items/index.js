import useAuth from 'hooks/useAuth';

import dashboard from './dashboard';
import pages from './pages';
import contents from './Contents';
import other from './other';

// ==============================|| MENU ITEMS ||============================== //

// const menuItems = {
//     items: [dashboard, pages, utilities, other],
// };
const MenuItems = () => {
    const auth = useAuth();
    if (auth.isLoggedIn) {
        return { items: [dashboard, contents, other] };
    }
    return {
        items: [dashboard, pages, contents, other],
    };
};

export default MenuItems;
