var path = require('path');
var nib = require('nib');
var stylusLoader = require('stylus-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/main/resources/templates/index.html',
    filename: 'index.html',
    inject: 'body'
});



module.exports = {
    entry: './src/main/js/index.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/bundle.js'
    },
    plugins: [
            new stylusLoader.OptionsPlugin({
                default: {
                    // nib - CSS3 extensions for Stylus
                    use: [nib()],
                    // no need to have a '@import "nib"' in the stylesheet
                    import: ['~nib/lib/nib/index.styl']
                }
            }),
            HTMLWebpackPluginConfig
        ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.styl$/,
                        use: [
                                'style-loader',
                                'css-loader?camelCase&modules&importLoaders=1&localIdentName=[local]---[hash:base64:5]',
                                'stylus-loader'
                            ]
                        },
                        {
                            test: /\.css$/,
                            loader: 'style-loader!css-loader'
                        }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
            'node_modules'
        ]
    }
};