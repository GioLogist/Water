'use strict';

var fs = require("fs");

module.exports = function(Twig) {

  Twig.extendFunction('file_get_contents', function(path) {

    if(fs.existsSync(path)) {
      var contents = fs.readFileSync(path, 'utf8');
    } else {
      var contents = false;
    }
    return contents;
  });

};
