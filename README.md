# Gulp-kit

# Gulp + BrowserSync

## Technology Stack
- SASS compilation using [gulp-sass](https://github.com/dlmanning/gulp-sass)
- Local development environment with [browser-sync](https://www.browsersync.io)
- imagemin compressor (https://www.npmjs.com/package/gulp-imagemin)


## Structure<br>
- dist 				 - distribution folder<br />
- src				   - source files<br />
    |-	css	   - css files. This files not need to transform<br />
    |-	fonts	 - fonts folder<br />
	  |-	images - files images to produce<br />
	  |-	js		 - javascript files before transform<br />
	  |-	scss	 - files of scss before transform<br />


## Common instruction
Before installing and running the project, you must install the following packages:
1.npm,
2.nodejs,
3.gulp

Below are links to official sources:
1. npm - https://www.npmjs.com/get-npm
2. nodejs - https://nodejs.org./download/
3. gulp - https://gulpjs.com/docs./getting-started/quick-start/


## Installing depensies before usage
1. Run `npm i` to install depensies


## Usage
1. Run `gulp` to set up watches for the development environment and hot reload bowser


## Building
Run `gulp build` to build the app for distribution in the `dist` folder.
