'use strict';

var fs = require("fs");

module.exports = function(Twig) {

  Twig.extendFunction('file_get_contents', function(path) {
    var contents = fs.readFileSync(path, 'utf8');
    return contents;
  });

};
