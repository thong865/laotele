const path = require('path')

module.exports = {
    entry: './lib/index.js',
    output: {
        filename: 'lao-tele.min.js',
        path: path.resolve(__dirname, 'dist')
    }
}