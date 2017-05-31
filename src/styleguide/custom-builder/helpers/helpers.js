'use strict';

var fs = require("fs");

module.exports = function(Twig) {

  Twig.extendFunction('file_get_contents', function(path) {
    console.log(path,'test');

    var contents = fs.readFileSync(path, 'utf8');
    console.log(contents)
    return contents;
  });

};
