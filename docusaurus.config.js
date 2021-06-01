/** @type {import('@docusaurus/types').DocusaurusConfig} */
const navbar = require('./config/navbar');
const footer = require('./config/footer');

module.exports = {
  title: '飞冰',
  tagline: '基于 React 的渐进式研发框架',
  url: 'https://beta.ice.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'alibaba', // Usually your GitHub org/user name.
  projectName: 'ice', // Usually your repo name.
  themeConfig: {
    navbar,
    footer,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebars.js'),
          // Please change this to your repo.
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
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ]
};
