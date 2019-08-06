var shell = require('shelljs');
const chalk = require('chalk');
const fs = require('fs');

module.exports = async (args) => {
    try {
        fs.readFile('package.json', (err, data) => {
            if (err){
                console.error(err)
                console.log('%s Can not open package.json file', chalk.red.bold('FAILD'));
            }
            let package = JSON.parse(data);
            
            if(package.thingworxServer != "" && package.thingworxUser != "" && package.thingworxPassword != ""){
                shell.exec('npm run upload --color always', {
                    silent: false
                });
                console.log('%s Deploy', chalk.green.bold('DONE'));
            } else {
                console.log('%s fild thingworxServer, thingworxUser,thingworxPassword are required for deploy, chack your package.json file', chalk.red.bold('FAILD'));
            }
        });

    } catch (err) {

        console.error(err)
        console.log('%s Deploy ', chalk.red.bold('FAILD'));
    }
}