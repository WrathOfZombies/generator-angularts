# generator-angularts [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> An AngularJS template built using TypeScript and SASS. Uses gulp task runner to compile .ts and .scss files. Also supports live-reload and chrome debugging (when using visual studio code as an ide)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-angularts using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-angularts
npm install -g tsd
```

Then generate your new project:

```bash
yo angularts
```

Switch to the project directory

```bash
npm install
tsd install
gulp bower:install
gulp build
```

Then navigate to http://localhost:8080 to see your template in action.

## Coming Soon

- Project name prompt for customizability
- Dependency installation

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## License

MIT © [Bhargav Krishna](https://github.com/WrathOfZombies)


[npm-image]: https://badge.fury.io/js/generator-angularts.svg
[npm-url]: https://npmjs.org/package/generator-angularts
[travis-image]: https://travis-ci.org/WrathOfZombies/generator-angularts.svg?branch=master
[travis-url]: https://travis-ci.org/WrathOfZombies/generator-angularts
[daviddm-image]: https://david-dm.org/WrathOfZombies/generator-angularts.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/WrathOfZombies/generator-angularts
[coveralls-image]: https://coveralls.io/repos/WrathOfZombies/generator-angularts/badge.svg
[coveralls-url]: https://coveralls.io/r/WrathOfZombies/generator-angularts
