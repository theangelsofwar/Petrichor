const dev = process.env.NODE_ENV !== 'production';

let config = {};

if(dev) {
  const withTypescript({
    webpack(config, options) {
      if(options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())

      return config;
    }
  });
}

module.exports = config;