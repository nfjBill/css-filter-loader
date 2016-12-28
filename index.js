/**
 * Created by ningfujun on 16/12/20.
 */
let filter = require('zhp-postcss');
let arrange = require('postcss-arrange');

module.exports = function(content) {
  return arrange(content,{
    'pxtorem': {
      propWhiteList:['']
    },
  });
};