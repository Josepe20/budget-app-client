const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  config.watchFolders = [...config.watchFolders, __dirname + '/storybook'];

  return config;
})();
