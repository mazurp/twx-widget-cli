const Listr = require('listr');
const chalk = require('chalk');
const {
  projectInstall
} = require('pkg-install');
var shell = require('shelljs');

const createDirectory = require('../utils/createDirectory')
const createPackageFile = require('../utils/createPackageFile')
const createPackageLockFile = require('../utils/createPackageLockFile')
const parseArgumentsIntoOptions = require('../utils/parseArgumentsIntoOptions')
const promptForMissingOptions = require('../utils/promptForMissingOptions')
const moveTemplate = require('../utils/moveTemplate')


module.exports = async (args) => {
  try {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);

    let dirPath = "";
    let jsonPath = "";
    const tasks = new Listr(
      [{
          title: 'Create Directory',
          task: () => {
            dirPath = createDirectory(process.cwd(), options.name)
          },
        },
        {
          title: 'Create package.json file',
          task: () => {
            jsonPath = createPackageFile(dirPath, options)
            createPackageLockFile(dirPath)
          }
        },
        {
          title: 'Create Template',
          task: () => moveTemplate(dirPath),
        },
        {
          title: 'Install dependencies',
          task: () => projectInstall({
            cwd: dirPath
          })
        },
        {
          title: 'Finish',
          task: () => {
            shell.cd(dirPath);
            shell.exec('npm run init', { silent: true });
          }
        }
      ], {
        exitOnError: false,
      }
    );

    await tasks.run();
    console.log('%s Project ready', chalk.green.bold('DONE'));
  } catch (err) {

    console.error(err)
  }
}