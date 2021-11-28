module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            screens: "./src/screens",
            shared: "./src/shared",
            utils: "./src/utils",
          },
        },
      ],
    ],
  };
};
