# Introduction

a css loader for webpack,use: css arrange,Thank postcss and its plug-ins

# css-filter for webpack

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

### webpack.config.jjs
``` javascript
loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'css-filter', 'sass'],
      },

    ]
```
## plugin conf
if you will use rem unit,you need this set rem
``` javascript
cssFilter:{
    pxtorem: {
      // propWhiteList:[],//open rem
      propWhiteList:[''],//close rem
    },
  },
```
My page setting
``` javascript
mobile.rem = function (opt) {
    let elem = {
        //Page scaling
        scale: 2,
        //Width of the design draft, is generally two times the width
        stan_width: 640,
        //Rem than size according to the browser the minimum font size Such as chrome,
        stan_percent: 62.5
    };

    //Using the jquery API, if you don't have a reference jquery, you have to simulate an API
    $.extend(elem,opt);

    let pe = elem.stan_percent / elem.stan_width;

    dom.winResize(function () {
        let now = ($(window).width() - elem.stan_width) * pe + elem.stan_percent;

        $('html').css({
            'font-size': now * elem.scale + '%'
        });
    });
};
```
I made a common ratio Settings, but if you have your own configuration refer to the following page

Set more see [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
