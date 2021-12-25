const path = require("path");

const HTMLWebpackPlugin = require(`html-webpack-plugin`);

//webpacK配置信息

module.exports = {
  // 入口文件
  entry: "./src/app.ts",
  // 打包文件位置
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    //指定規則
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",

        exclude: /node_modules/,
      },
      {
        test:/\.css$/,
        use:["style-loader","css-loader"],
        exclude: /node_modules/,
      }
    ],
  },
  //HTML外掛可以監視某一個HTML文件並且啟動Build可以拷貝一個新的Html文件並引入Bundle.js文件
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  //要開啟本地伺服器必須設置此項目 development/production
  mode: 'development',

  // resolve: {
  //   extensions: ['.js', '.ts',".css"]
  // }
};
