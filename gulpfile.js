const {src,dest,watch,series}= require('gulp')
const sass= require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('./src/sass/*.scss')
    .pipe(sass())
  
    .pipe(dest('./src/css'))
}

function watchtask(){
    watch(['./src/sass/*.scss','*.html'],buildStyles)
}

exports.default = series(buildStyles, watchtask)