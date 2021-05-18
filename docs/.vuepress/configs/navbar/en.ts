import type { NavbarConfig } from '@vuepress/theme-default';

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Advanced',
    children: [
      {
        text: 'Custom Materials',
        link: '/material/',
      },
    ],
  },
  {
    text: 'Official Materials',
    children: [
      {
        text: 'Fusion',
        link: '/',
      },
      {
        text: 'Antd',
        link: '/',
      },
    ],
  },
  {
    text: 'Learn More',
    children: [
      {
        text: 'Resources',
        children: [
          {
            text: 'AppWorks',
            link: 'https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks',
          },
          {
            text: 'Micro Frontends',
            link: 'https://micro-frontends.ice.work/',
          },
        ],
      },
      {
        text: 'Community',
        children: [
          {
            text: 'DingDing Group',
            link: 'https://img.alicdn.com/tfs/TB134cdVq6qK1RjSZFmXXX0PFXa-1125-1485.jpg',
          },
        ],
      },
    ],
  },
];
