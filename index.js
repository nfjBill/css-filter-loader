/**
 * Created by ningfujun on 16/12/20.
 */
let filter = require('zhp-postcss');
let arrange = require('postcss-arrange');
let loaderUtils = require("loader-utils");
let _ = require('lodash');

module.exports = function(content) {
  var query = loaderUtils.getLoaderConfig(this,'cssFilter');

  let conf = _.extend({
    'pxtorem': {
      propWhiteList:['']
    },
  },query);

  return arrange(content,conf);
};