// assets
import { IconShadow, IconWindmill, IconDragDrop } from '@tabler/icons';

// constant
const icons = {
    IconDragDrop,
    IconShadow,
    IconWindmill,
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'utilities',
    title: 'Utilities',
    type: 'group',
    children: [
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

export default utilities;
