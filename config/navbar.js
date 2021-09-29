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
      to: '/docs/guide/basic/vite',
      position: 'right',
      label: 'Vite 模式 🔥',
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
      label: '官方生态',
      position: 'right',
      items: [
        {
          label: '微前端 icestark',
          to: 'http://micro-frontends.ice.work/',
        },
        {
          label: '可视化工具 AppWorks',
          to: 'https://appworks.site/',
        },
        {
          label: '自定义物料开发',
          to: 'https://appworks.site/materials/about.html',
        },
        {
          label: '环境管理 AppToolkit',
          to: 'https://github.com/appworks-lab/toolkit#readme',
        },
      ],
    },
    {
      label: '更多资源',
      position: 'right',
      items: [
        {
          to: 'https://fusion.design/pc/doc/component/102',
          label: 'Fusion 组件',
        },
        {
          to: 'https://ant.design',
          label: 'antd 组件',
        },
        {
          to: 'https://iceteam.gitee.io',
          label: '国内镜像站点',
        },
        {
          label: '前端基础',
          to: '/docs/resource/front-basic',
        },
        {
          label: '前端环境',
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