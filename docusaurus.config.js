/** @type {import('@docusaurus/types').DocusaurusConfig} */
const navbar = require('./config/navbar');
const footer = require('./config/footer');

module.exports = {
  title: '飞冰',
  tagline: '基于 React 的渐进式研发框架',
  url: 'https://beta.ice.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba',
  projectName: 'ice',
  themeConfig: {
    announcementBar: {
      id: 'announcementBar-2',
      content: 'icejs 2.0 版本已发布，支持 Webpack 5 和 Vite 两种构建模式，点击 <a href="#">了解更多</a>',
      isCloseable: false,
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
