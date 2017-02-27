module.exports = {
    entry: ["babel-polyfill", "./src/js/index.js"],
    output: {
        path: "./src",
        filename: "bundle.js"
    },
    debug: true,
    devtool: "#eval-source-map",
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
            }
        ]
    }
}
