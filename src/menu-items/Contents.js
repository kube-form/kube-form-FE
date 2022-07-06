// assets
import { IconShadow, IconWindmill, IconDragDrop, IconKey } from '@tabler/icons';

// constant
const icons = {
    IconDragDrop,
    IconShadow,
    IconWindmill,
    IconKey,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const contents = {
    id: 'contents',
    title: 'Contents',
    type: 'group',
    children: [
        {
            id: 'iam',
            title: 'IAM',
            type: 'collapse',
            icon: icons.IconKey,
            children: [
                {
                    id: 'iam-register',
                    title: 'Register',
                    type: 'item',
                    url: '/iam/register',
                    breadcrumbs: false,
                },
                {
                    id: 'iam-setting',
                    title: 'Setting',
                    type: 'item',
                    url: '/iam/setting',
                    breadcrumbs: false,
                },
            ],
        },
        {
            id: 'util-cluster',
            title: 'Cluster',
            type: 'item',
            url: '/utils/cluster',
            icon: icons.IconDragDrop,
            breadcrumbs: false,
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false,
        },
        {
            id: 'icons',
            title: 'Icons',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/icons/tabler-icons',
                    breadcrumbs: false,
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/icons/material-icons',
                    breadcrumbs: false,
                },
            ],
        },
    ],
};

export default contents;
