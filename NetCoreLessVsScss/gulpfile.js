/// <binding BeforeBuild='build' />
const { parallel, src, dest } = require('gulp'),
	sass = require('gulp-sass'),
	less = require('gulp-less');
var baseFilepath = "./wwwroot/css/";

function buildSass() {
	return src(baseFilepath + 'scss/style.scss')
		.pipe(sass())
		.pipe(dest(baseFilepath + 'scss'));
}

function buildLess() {
	return src(baseFilepath + 'less/style.less')
		.pipe(less())
		.pipe(dest(baseFilepath + 'less'));
}

exports.build = parallel(buildSass, buildLess);