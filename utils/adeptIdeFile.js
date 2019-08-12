const replace = require('replace-in-file');
const path = require('path');

module.exports = (pathDir, name) =>{

  let fileName = pathDir + path.sep + 'src' + path.sep + 'demoWebpack.ide.ts';

  const options = {
    files: fileName,
    from: "'name': 'TypescriptWebpackWidget',",
    to: "'name': '" + name +"',",
  };

  try {
    const results = replace.sync(options);
    console.log('Replacement results:', results);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}


