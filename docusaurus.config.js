/** @type {import('@docusaurus/types').DocusaurusConfig} */
const navbar = require('./config/navbar');
const footer = require('./config/footer');

module.exports = {
  title: '飞冰',
  tagline: '基于 React 的研发解决方案',
  url: 'https://ice.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba',
  projectName: 'ice',
  themeConfig: {
    announcementBar: {
      id: 'announcementBar-2',
      // TODO: 补充了解更多的链接
      content: 'icejs 2.0 版本已发布，支持 Webpack 5 和 Vite 两种构建模式，点击 <a href="/docs/guide/upgrade">快速升级</a>',
      isCloseable: true,
    },
    navbar,
    footer,
    algolia: {
      apiKey: '01f284e7e1c13eac3dc14beb6d8b153d',
      indexName: 'ice',
      // // Optional: see doc section below
      // contextualSearch: true,

      // // Optional: see doc section below
      // appId: 'YOUR_APP_ID',

      // // Optional: Algolia search parameters
      // searchParameters: {},

      // //... other Algolia params
    },
    gtag: {
      trackingID: 'G-QZ0FEKY38G',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebars.js'),
          editUrl:
            'https://github.com/ice-lab/site/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   {
    //     hashed: true,
    //     language: ["en", "zh"],
    //   },
    // ],
    require.resolve("./plugins/redirect.js"),
  ]
};
