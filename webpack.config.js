import { resolve as _resolve } from 'path';

export const entry = './src/main.ts';
export const target = 'node';
export const mode = 'development';
export const module = {
  rules: [
    {
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: ['.ts', '.js'],
  alias: {
    '@': _resolve(__dirname, 'src'),
    '@/mongoose': _resolve(__dirname, 'src/mongoose'),
    '@/graphql': _resolve(__dirname, 'src/graphql'),
    '@/portfolio': _resolve(__dirname, 'src/portfolio'),
  },
};
export const output = {
  filename: 'bundle.js',
  path: _resolve(__dirname, 'dist'), // Change this to your desired output path
};
