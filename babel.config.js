module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
    presets: ['module:metro-react-native-babel-preset'],
    plugins: ['module:react-native-dotenv'],
  };
};
