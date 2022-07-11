// assets
import { IconUser } from '@tabler/icons';

// constant
const icons = {
    IconUser,
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //
// const logined = useAuth();

const pages = {
    id: 'pages',
    title: 'Pages',
    caption: '로그인 하면 k8s를 직접 구성할 수 있습니다.',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconUser,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/pages/login/login3',
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/pages/register/register3',
                },
            ],
        },
    ],
};

export default pages;
