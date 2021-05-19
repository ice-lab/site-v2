import type { NavbarConfig } from '@vuepress/theme-default';

export const zh: NavbarConfig = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '配置',
    link: '/config/',
  },
  {
    text: 'API',
    link: '/api/',
  },
  {
    text: '插件',
    children: [
      {
        text: '官方插件',
        link: '/plugin/list/antd.md',
      },
      {
        text: '插件开发',
        link: '/plugin/develop/start.md',
      },
    ],
  },
  {
    text: '物料',
    children: [
      {
        text: 'Fusion',
        link: '/fusion/',
      },
      {
        text: 'Antd',
        link: '/antd/',
      },
      {
        text: '自定义物料',
        link: '/material/',
      },
    ],
  },
  {
    text: '了解更多',
    children: [
      {
        text: '官方生态',
        children: [
          {
            text: 'AppWorks',
            link: 'https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks',
          },
          {
            text: '微前端',
            link: 'https://micro-frontends.ice.work/',
          },
        ],
      },
      {
        text: '前端基础',
        children: ['/resource/front-env.md', '/resource/npms.md', '/resource/front-basic.md'],
      },
      {
        text: '社区交流',
        children: [
          {
            text: '钉钉群',
            link: 'https://img.alicdn.com/tfs/TB134cdVq6qK1RjSZFmXXX0PFXa-1125-1485.jpg',
          },
        ],
      },
    ],
  },
];
