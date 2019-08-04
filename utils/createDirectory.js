var fs = require('fs');
const path = require('path');


module.exports = async (pathDir, name) => {
    var dir = pathDir + name;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    return dir;
  }




