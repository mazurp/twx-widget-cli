const replace = require('replace-in-file');
const path = require('path');

module.exports = (pathDir, name, description) =>{

  let ideFileName = pathDir + path.sep + 'src' + path.sep + 'demoWebpack.ide.ts';
  let runtimeFileName = pathDir + path.sep + 'src' + path.sep + 'demoWebpack.runtime.ts';

  const optionsWidgetName = {
    files: ideFileName,
    from: "name: 'TypescriptWebpackWidget',",
    to: "name: '" + name +"',",
  };

  const optionsWidgetDescription = {
    files: ideFileName,
    from: "description: 'An example widget showing how you can use modern web developent tech'",
    to: "description: '" + description +"',",
  };

  const optionsIdeClassName = {
    files: ideFileName,
    from: "class DemoWebpackWidget extends TWComposerWidget {",
    to: "class " + name + " extends TWComposerWidget {",
  };

  const optionsRuntimeClassName = {
    files: runtimeFileName,
    from: "class DemoWebpackWidget extends TWRuntimeWidget {",
    to: "class " + name + " extends TWRuntimeWidget {",
  };

  try {
    replace.sync(optionsWidgetName);
    replace.sync(optionsWidgetDescription);
    replace.sync(optionsIdeClassName);
    replace.sync(optionsRuntimeClassName);
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}


