// CLI using yargs for search command
// ex: node cli.js search -k keyword
const yargs = require('yargs')
const app = require('./app')

const flags = yargs
    .usage('$0: Usage <cmd> [options]')
    .command({
        command : 'search',
        desc : 'Searches within StarWars API for characters information.',
        builder : (yargs) => {
            return yargs
            .options('n' , {
                alias : 'name',
                describe : 'Name of any StarWars Character. '
            })
        },
        handler : (argv) => {
            app.search(argv.name)
        }
    })
    .help('help')
    .argv
