module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/transform-runtime', 'babel-plugin-transform-import-meta'],
    transform: {
        '\\.js$': ['babel-jest', { configFile: './babel-jest.config.js' }],
      },
  }