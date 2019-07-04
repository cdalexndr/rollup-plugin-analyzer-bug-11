import analyze from 'rollup-plugin-analyzer';

export default {
    input: './first.js',
    output: {
        file: 'bundle.js',
        format: 'iife',
        name: 'bundle'
    },
    plugins: [
        analyze()
    ]
};