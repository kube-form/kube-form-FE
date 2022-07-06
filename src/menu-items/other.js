// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
    id: 'sample-docs-roadmap',
    type: 'group',
    children: [
        {
            id: 'sample',
            title: 'Sample',
            type: 'item',
            url: '/sample-page',
            icon: icons.IconBrandChrome,
            breadcrumbs: false,
        },
        {
            id: 'github-page',
            title: 'Github Page',
            type: 'item',
            url: 'https://github.com/kube-form',
            icon: icons.IconHelp,
            external: true,
            target: true,
        },
    ],
};

export default other;
