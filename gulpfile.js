const { src,
        dest,
        watch,
        parallel,
        series } =   require('gulp');
const scss =         require('gulp-sass');
const concat =       require('gulp-concat');
const browserSync =  require('browser-sync').create();
const uglify =       require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin =     require('gulp-imagemin');
const del =          require('del');

function styles() {
  return src('src/scss/styles.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('styles.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
};

function scripts() {
  return src([
    'node_modules/jquery/dist/jquery.js',
    'src/js/scripts.js'
  ])
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browserSync.stream())
};

function images() {
  return src('src/images/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })
    ]))
    .pipe(dest('dist/images'))
};

function cleanDist() {
  return del('dist');
};

function build() {
  return src([
    'src/css/styles.min.css',
    'src/fonts/**/*',
    'src/js/scripts.min.js',
    'src/*.html'
  ], {base: 'src'})
    .pipe(dest('dist'))
};

function watching() {
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js', '!src/js/scripts.min.js'], scripts);
  watch(['src/*.html']).on('change', browserSync.reload);
};

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  });
};

exports.styles =      styles;
exports.scripts =     scripts;
exports.images =      images;
exports.watching =    watching;
exports.browsersync = browsersync;
exports.cleanDist =   cleanDist;
exports.build =       series(cleanDist, images, build);

exports.default =     parallel(styles, scripts, watching, browsersync);