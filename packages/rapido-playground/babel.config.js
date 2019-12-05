module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      // Expo preset
      'babel-preset-expo',
    ],
    plugins: [
      // Support for styled components
      'babel-plugin-styled-components',
    ],
  };
};
