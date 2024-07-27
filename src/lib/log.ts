import chalk from 'chalk'

export function error(message: string) {
  console.error(chalk.red('error:'), message)
}

export function success(message: string) {
  console.log(chalk.green('success:'), message)
}

export function created(name: string) {
  console.log('created:', chalk.green(name))
}

export function warn(message: string) {
  console.warn(chalk.yellow('warn:'), message)
}
