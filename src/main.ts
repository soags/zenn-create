import { NewArticleArgs } from './types'
import { Command } from 'commander'
import { spawn } from 'cross-spawn'
import {
  getSlugRemoteDuplicateMessage,
  getUnexpectedErrorMessage,
} from './utils'

const validateSlugRemote = async (slug: string) => {
  const res = await fetch(`https://zenn.dev/api/articles/${slug}`)
  if (res.status === 200) {
    console.error(getSlugRemoteDuplicateMessage(slug))
    return false
  }
  if (res.status === 404) {
    return true
  }
  console.error(getUnexpectedErrorMessage(res))
  return false
}

const spawnNewArticle = (args: NewArticleArgs) => {
  const {
    slug,
    title,
    emoji,
    type,
    published,
    publicationName,
    machineReadable,
    help,,
  } = args

  const child = spawn('npx', [
    'zenn',
    'new:article',
    '--slug',
    slug,
    '--title',
    title || '',
    '--emoji',
    emoji || '',
    '--type',
    type || '',
    published ? '--published' : '',
    '--publication-name',
    publicationName || '',
    machineReadable ? '--machine-readable' : '',
    help ? '--help' : '',
  ])
  child.stdout.on('data', (data) => console.log(data.toString()))
  child.stderr.on('data', (data) => console.error(data.toString()))
}

const program = new Command()

program.name('zenn-slugged')

program
  .command('new:article')
  .argument('<slug>', 'slug of the article')
  .option('--title [title]')
  .option('--emoji [emoji]')
  .option('--type [type]')
  .option('--published [published]')
  .option('--publication-name [publicationName]')
  .option('--machine-readable')
  .option('-h, --help')
  .action(async (slug: string, options: Omit<NewArticleArgs, 'slug'>) => {
    if (await validateSlugRemote(slug)) {
      spawnNewArticle({
        slug,
        ...options,
      })
    }
  })

program.parse(process.argv)
