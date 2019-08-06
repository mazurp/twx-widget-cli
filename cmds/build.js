var shell = require('shelljs');
const chalk = require('chalk');

module.exports = async (args) => {
    try {

        shell.exec('npm run build --color always', {
            silent: false
        });
        console.log('%s Build ', chalk.green.bold('DONE'));
    } catch (err) {

        console.error(err)
        console.log('%s Build ', chalk.red.bold('FAILD'));
    }
}