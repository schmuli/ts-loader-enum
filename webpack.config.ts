import { Configuration } from 'webpack';
import { resolve } from 'path';

const configuration: Configuration = {
    context: __dirname,

    entry: './src/main.ts',

    output: {
        path: resolve(__dirname, 'dist/webpack'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }
            }
        ]
    }
};

export default configuration;
