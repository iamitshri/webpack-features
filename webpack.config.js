var path = require("webpack");
var path = require("path");
module.exports = {
    entry: {
        home: './js/home.js',
        about: './js/about.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    watch: true,
    devtool:"cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                use: [{
                    loader: "jshint-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]

    }
}