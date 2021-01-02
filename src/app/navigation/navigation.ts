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
    },
    {
        id: 'organizationprofile',
        title: 'Organization Profile',
        type: 'item',
        icon: 'settings',
        url: '/org-profile',
    },
    {
        id: 'leavemanagement',
        title: 'Leave Management',
        type: 'collapsable',
        icon: 'dashboard',
        children: [
            {
                id: 'holidays',
                title: 'Holidays',
                icon: 'web',
                type: 'item',
                url: '/holidays',
            },
            {
                id: 'faq',
                title: 'FAQ',
                icon: 'group',
                type: 'item',
                url: '/faq',
            },
        ]
    }
];
