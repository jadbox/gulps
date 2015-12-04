export default {

    sourceDir: './src/',
    distDir: './dist/',
    testDir: './test/',
    outputName: 'gulps.js',
    minified: 'gulps.min.js',
    notifyTitle: 'gulps',
    mochaGlobals: [
        'stub',
        'spy',
        'expect'
    ],
    gzip: {
        src: 'dist/**/*.{json,js,js.map}',
        dest: 'zipped/',
        options: {}
    }
}