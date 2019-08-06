const menus = {
  main: `
    twx-widget [command] <options>

    init .............. create new widget project
    build ............... build widget
    version ............ show package version
    help ............... show help menu for a command
    
    type 'twx-widget [command]' for more info about specify command`,

    init: `
    twx-widget init

    -n..... name of widget
    -d..... description of widget
    -t..... minimum Thingworx version
    -a..... author/vendor of widget
    -r..... auto deploy (true/false)
    -s..... URL TWX for auto deploy
    -u..... TWX username
    -p..... TWX password`,

}

module.exports = (args) => {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]

  console.log(menus[subCmd] || menus.main)
}
