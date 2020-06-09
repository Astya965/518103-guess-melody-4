const path = require(`path`);
const pathMain = path.join(__dirname, `public`);

module.exports = {
    entry: `./src/index.js`,
    output: {
        filename: `bundle.js`,
        path: pathMain
    },
    devServer: {
        contentBase: pathMain,
        open: true,
        inline: true,
        port: 1337
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                  loader: `babel-loader`,
                },
              }
        ],
    },
    devtool: `source-map`,
}
