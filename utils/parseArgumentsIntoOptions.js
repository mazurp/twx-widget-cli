var arg = require('arg');


module.exports = (rawArgs) =>{
    const args = arg(
        {
          '-n': String,
          '-d': String,
          '-t': String,
          '-a': String,
          '-r': String,
          '-s': String,
          '-p': String,
          '-u': String,
        }
      );
      return {
        name: args['-n'],
        description: args['-d'] ,
        minimumThingWorxVersion: args['-t'],
        author: args['-a'],
        autoDeploy: args['-r'] ? !!JSON.parse(String(args['-r']).toLowerCase()) : undefined,
        url: args['-s'],
        username: args['-u'],
        pass: args['-p'],
      };
  }




