module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/app/components',
          '@hooks': './src/app/hooks',
          '@router': './src/app/router',
          '@screens': './src/app/screens',
          '@styles': './src/app/styles',
          '@colors': './src/modules/resources/colors',
          '@constants': './src/modules/resources/constants',
          '@images': './src/modules/resources/images',
          '@utils': './src/modules/resources/utils',
          '@redux': './src/modules/core',
          '@services': './src/modules/services',
          '@interfaces': './src/interfaces',
        },
      },
    ],
  ],
};