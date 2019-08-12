const inquirer = require('inquirer');


module.exports = async (options) => {
    const questions = [];
    if (options.name == undefined) {
        questions.push({
            type: 'input',
            name: 'name',
            message: 'Please put name',
            default: 'widget',
        });
    }

    if (options.description == undefined) {
        questions.push({
            type: 'input',
            name: 'description',
            message: 'Please put description',
            default: '',
        });
    }

    if (options.author == undefined) {
        questions.push({
            type: 'input',
            name: 'author',
            message: 'Please put author',
            default: '',
        });
    }

    if (options.minimumThingWorxVersion == undefined) {
        questions.push({
            type: 'input',
            name: 'minimumThingWorxVersion',
            message: 'Please put minimum ThingWorx version',
            default: '8.0.0',
        });
    }

    if (options.autoDeploy == undefined) {
        questions.push({
            type: 'confirm',
            name: 'autoDeploy',
            message: 'Do you want auto deploy function',
            default: false,
        });
    }

    const answers = await inquirer.prompt(questions);
    let tempOpions = {
        ...options,
        name: options.name || answers.name,
        description: options.description || answers.description,
        author: options.author || answers.author,
        minimumThingWorxVersion: options.minimumThingWorxVersion || answers.minimumThingWorxVersion,
        autoDeploy: options.autoDeploy || answers.autoDeploy
    };

    if (answers.autoDeploy || options.autoDeploy) {
        const questions = [];
        if (options.url == undefined) {
            questions.push({
                type: 'input',
                name: 'url',
                message: 'Please put server URL',
                default: 'http://localhost:8080',
            });
        }

        if (options.username == undefined) {
            questions.push({
                type: 'input',
                name: 'username',
                message: 'Please put username',
                default: 'Administrator',
            });
        }

        if (options.pass == undefined) {
            questions.push({
                type: 'input',
                name: 'pass',
                message: 'Please put password',
                default: 'trUf6yuz2?_Gub',
            });
        }

        const answers = await inquirer.prompt(questions);
        return {
            ...tempOpions,
            url: options.url || answers.url,
            username: options.username || answers.username,
            pass: options.pass || answers.pass
        };

    } else{
        return tempOpions;
    }
}