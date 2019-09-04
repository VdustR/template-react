const isProduction = process.env.NODE_ENV === 'production';

const existFilter = a => a;

module.exports = {
  entry: [
    require.resolve('@babel/polyfill'),
    isProduction && 'entries/disableReactDevtools',
    isProduction && 'entries/registerServiceWorker',
    'src/index',
  ].filter(existFilter),
  plugins: [
    {
      resolve: '@poi/plugin-eslint',
    },
    {
      resolve: '@poi/plugin-pwa',
    },
  ],
  chainWebpack: config => {
    config.resolve.alias.set('react-dom', '@hot-loader/react-dom');
  },
};
