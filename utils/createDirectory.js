var fs = require('fs');
const path = require('path');


module.exports = (pathDir, name) =>{
    var dir = pathDir + path.sep + name;

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    return dir;
  }




