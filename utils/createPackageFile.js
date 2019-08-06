const fs = require('fs');
const path = require('path');

module.exports = (pathDir, options) =>{
    let packageJSON = {
      "name": "",
      "version": "1.0.0",
      "description": "",
      "thingworxServer": "",
      "thingworxUser": "",
      "thingworxPassword": "",
      "author": "",
      "minimumThingWorxVersion": "6.0.0",
      "repository": {
          "type": "git",
          "url": "https://github.com/stefan-lacatus/ThingworxDemoWebpackWidget.git"
      },
      "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1",
          "build": "webpack --mode production",
          "watch": "webpack --watch --mode development",
          "server": "webpack-dev-server --open",
          "upload": "webpack --mode development --env.upload",
          "init": "webpack --env.init"
      },
      "license": "ISC",
      "devDependencies": {
          "@babel/core": "^7.0.1",
          "@babel/preset-env": "^7.0.0",
          "@types/jquery": "^3.3.6",
          "@types/node": "^10.9.4",
          "@types/webpack-env": "^1.13.6",
          "babel-loader": "^8.0.2",
          "clean-webpack-plugin": "^0.1.19",
          "copy-webpack-plugin": "^4.5.2",
          "css-loader": "^1.0.0",
          "dtsbundler-webpack-plugin": "github:stefan-lacatus/dtsbundler-webpack-plugin#master",
          "extract-text-webpack-plugin": "^3.0.2",
          "file-loader": "^2.0.0",
          "request": "^2.88.0",
          "source-map-loader": "^0.2.4",
          "style-loader": "^0.23.0",
          "ts-loader": "^5.1.0",
          "typescript": "^3.0.3",
          "url-loader": "^1.1.1",
          "webpack": "^4.18.0",
          "webpack-cli": "^3.1.0",
          "webpack-dev-server": "^3.1.8",
          "xml2js": "^0.4.19",
          "zip-webpack-plugin": "^3.0.0"
      },
      "dependencies": {
          "typescriptwebpacksupport": "github:stefan-lacatus/ThingworxWidgetSupportPackage#master"
      }
  };
  packageJSON.name = options.name ? options.name : '';
  packageJSON.description = options.description ? options.description : '';
  packageJSON.author = options.author ? options.author : '';
  packageJSON.minimumThingWorxVersion = options.minimumThingWorxVersion ? options.minimumThingWorxVersion : '';

  if(options.autoDeploy){
    packageJSON.thingworxServer = options.url ? options.url : '';
    packageJSON.thingworxUser = options.username ? options.username : '';
    packageJSON.thingworxPassword = options.pass ? options.pass : '';
  }

  let fileName = pathDir + path.sep + 'package.json';

  let data = JSON.stringify(packageJSON, null, 3);

  fs.writeFileSync(fileName, data, () => {
    return fileName;
  });
  return null;
}


