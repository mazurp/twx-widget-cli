const ora = require('ora')
const createDirectory = require('../utils/createDirectory')
const createPackageFile = require('../utils/createPackageFile')

module.exports = async (args) => {
  const spinner = ora().start()
  try {
    const dirPath = await createDirectory(process.cwd(), 'new Directory')
    console.log(dirPath);
    const jsonPath = await createDirectory(dirPath)
    console.log(jsonPath);
    spinner.stop()

    
    
  } catch (err) {
    spinner.stop()

    console.error(err)
  }
}
