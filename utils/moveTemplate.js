var copydir = require('copy-dir');
var path = require('path');


module.exports = (pathDir) => {
    const templateDir = path.resolve(
        __dirname,
        '../template/'
      );

    copydir.sync(templateDir, pathDir, {
        utimes: false, // keep add time and modify time
        mode: true, // keep file mode
        cover: true // cover file when exists, default is true
    });
}