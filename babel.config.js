module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          '@': './src',
        },
      }],
      'react-native-reanimated/plugin',
      'react-native-paper/babel',
      'nativewind/babel',
    ],
    env: {
      development: {
        plugins: ['react-native-paper/babel', 'nativewind/babel'],
      },
      test: { 
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
      },
    },
  };
};
