module.exports = {
  title: '飞冰',
  logo: {
    alt: '飞冰（ICE）',
    src: 'img/logo.png',
  },
  items: [
    {
      type: 'search',
      position: 'right',
    },
    {
      to: '/docs/guide/about',
      position: 'right',
      label: '指南',
    },
    {
      to: '/docs/config/about',
      position: 'right',
      label: '配置',
    },
    {
      to: '/docs/api/about',
      position: 'right',
      label: 'API',
    },
    {
      position: 'right',
      label: '插件',
      to: '/docs/plugin/list/moment-locales'
    },
    {
      position: 'right',
      to: '/docs/fusion/about',
      label: '组件',
      // items: [{
      //   label: 'Fusion 物料',
      //   to: '/docs/fusion/about'
      // }, {
      //   label: 'Antd 物料',
      //   to: '/docs/antd/about',
      // }, {
      //   label: '自定义物料',
      //   to: '/docs/material/about',
      // }]
    },
    {
      label: '了解更多',
      position: 'right',
      items: [
        {
          label: 'AppWorks',
          href: 'https://marketplace.visualstudio.com/items?itemName=iceworks-team.iceworks',
        },
        {
          label: '微前端',
          href: 'https://micro-frontends.ice.work/',
        },
        {
          label: '钉钉交流群',
          href: 'https://img.alicdn.com/tfs/TB134cdVq6qK1RjSZFmXXX0PFXa-1125-1485.jpg',
        },
        {
          label: '前端基础',
          to: '/docs/resource/front-env',
        },
      ],
    },
    {
      href: 'https://github.com/alibaba/ice',
      label: 'GitHub',
      position: 'right',
    },
  ],
};