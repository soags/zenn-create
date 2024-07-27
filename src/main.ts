import { Command } from '@commander-js/extra-typings'
import { version } from '../package.json'
import { newArticleCommand } from './commands/article'
import { common } from './lib/messages'

const program = new Command()

program
  .name('zenn-create')
  .version(version, '--version, -v', common.description.version)
  .addCommand(newArticleCommand())
  .helpOption('--help, -h', common.description.help)
  .helpCommand('help [command]', common.description.helpCommand)

program.parseAsync()
