module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
  plugins: [
    [
      require("@babel/plugin-proposal-decorators").default,
      {
        legacy: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "assets":"./assets",
          "@constants": "./src/constants",
          "@core/api": "./src/core/api",
          "@core/network": "./src/core/network",
          "@core/use-case": "./src/core/use-case",
          "@core/theme": "./src/core/theme",
          "@series/domain": "./src/features/series/domain",
          "@series/data": "./src/features/series/data",
          "@series/components": "./src/features/series/presentation/components",
          "@series/hooks": "./src/features/series/presentation/hooks",
          "@series/screens": "./src/features/series/presentation/screens",
          "@core/di": "./src/core/di",
          "@series/di": "./src/features/series/di",
          "@di": "./src/di",
        },
      },
    ]
  ],
};
