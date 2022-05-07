module.exports = function (context, options) {
  return {
    name: 'docusaurus-public-path-plugin',
    configureWebpack: (config, isServer, utils) => {

      try {
        const getDefCloudInfo = require('@ali/get-def-cloud-info');
        const { baseUrl } = getDefCloudInfo();

        console.log('set def baseurl', baseUrl);

        return {
          output: {
            publicPath: 'https://dev.g.alicdn.com/ice/docs/0.0.1/'
          }
        };
      } catch(err) {
        return {};
      }
    },
  }
};