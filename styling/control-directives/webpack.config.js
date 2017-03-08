require('es6-promise').polyfill();

module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: "./src",
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        contentBase: "./src",
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    }
}
