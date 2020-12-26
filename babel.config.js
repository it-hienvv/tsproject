module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: [
                    '.ios.js',
                    '.android.js',
                    '.js',
                    '.ts',
                    '.tsx',
                    '.json',
                ],
                alias: {
                    tests: ['./tests/'],
                    '@components': './src/components/',
                    '@assets': './src/assets/',
                    '@constant': './src/constant/',
                    '@features': './src/features/',
                    '@networks': './src/networks/',
                    '@actions': './src/actions/',
                    '@routers': './src/routers/',
                    '@sagas': './src/sagas/',
                    '@selectors': './src/selectors/',
                    '@utils': './src/utils/',
                },
            },
        ],
    ],
};
