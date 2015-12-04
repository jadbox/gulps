export default {

    sourceDir: './src/',
    distDir: './dist/',
    testDir: './test/',
    specDir: './test/specs/',
    outputName: 'gulps.js',
    libraryName: 'gulps',
	minified: 'gulps.min.js',
    notifyTitle: 'gulps',
    mocha: {
		reporter: 'spec'
	},
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