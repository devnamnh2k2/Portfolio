import { Github, Images, Navigation } from 'lucide-react';
// types.ts
export interface NavItem {
    label: string;
    path: string;
    isActive?: boolean;
}

export interface SubMenuItem {
    title: string;
    description: string;
    icon?: any;
}

export interface HeaderData {
    logo: string;
    navItems: NavItem[];
    subMenu: SubMenuItem[];
}

export const headerMockData: HeaderData = {
    logo: 'SZ',
    navItems: [
        { label: 'Home', path: '/', isActive: true },
        { label: 'My work', path: '/work' },
        { label: 'Blog', path: '/blog' },
        { label: 'More', path: '/more' }
    ],
    subMenu: [
        {
            title: 'My Github Profile',
            description: 'Explore my projects and contributions on GitHub.',
            icon: <Github />
        },
        {
            title: 'Photography Portfolio',
            description: 'View my collection of photographs and visual art.',
            icon: <Images />
        },
        {
            title: 'Contact Me',
            description: 'Have any questions? Feel free to reach out to me.',
            icon: <Navigation />
        }
    ]

};