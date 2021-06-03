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
    navbar,
    footer,
    googleAnalytics: {
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
            'https://github.com/ice-lab/site/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
      },
    ],
    '@docusaurus/plugin-google-analytics',
    require.resolve("./plugins/redirect.js"),
  ]
};
