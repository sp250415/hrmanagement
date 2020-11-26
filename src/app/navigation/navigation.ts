import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'clientlist',
        title: 'Pa Clients',
        icon: 'admin_panel_settings',
        type: 'item',
        url: '/paclients'
    },
    {
        id: 'pausers',
        title: 'Users',
        type: 'item',
        icon: 'group_add',
        url: '/pausers',
    },
    {
        id: 'subscription',
        title: 'Subscription',
        type: 'item',
        icon: 'settings',
        url: '/subscription',
    }
];
