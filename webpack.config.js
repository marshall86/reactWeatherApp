/**
 * Author marshall
 * Created on 24/01/17.
 */

var webpack = require('webpack');

module.exports = {
    watch: 	  true,
    progress: true,
    colors:   true,
    debug: 	  true,
    context:  __dirname,
    entry:    [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$':      'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path:     __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root:  __dirname,
        alias: {
            Main:     'app/components/main.jsx',
            Nav:      'app/components/nav.jsx',
            Weather:  'app/components/weather.jsx',
            About:    'app/components/about.jsx',
            Examples: 'app/components/examples.jsx',
            WeatherForm: 'app/components/weatherForm.jsx',
            WeatherMessage: 'app/components/weatherMessage.jsx',
            OpenWeatherMap: 'app/api/openWeatherMap.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};