/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '飞冰（ICE）',
  tagline: '基于 React 的前端研发框架',
  url: 'https://beta.ice.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba', // Usually your GitHub org/user name.
  projectName: 'ice', // Usually your repo name.
  themeConfig: {
    navbar: {
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
          items: [{
            label: '官方插件',
            to: '/docs/plugin/list/moment-locales'
          }, {
            label: '插件开发',
            to: '/docs/plugin/develop/start',
          }]
        },
        {
          position: 'right',
          label: '物料',
          items: [{
            label: 'Fusion 物料',
            to: '/docs/fusion/about'
          }, {
            label: 'Antd 物料',
            to: '/docs/antd/about',
          }, {
            label: '自定义物料',
            to: '/docs/material/about',
          }]
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
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
