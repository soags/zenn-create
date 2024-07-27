import { Command } from '@commander-js/extra-typings'
import { generateFileIfNotExist, getWorkingPath } from '../lib/utils'
import * as log from '../lib/log'
import { generateArticleSlug } from '../lib/slug'
import { article } from '../lib/messages'

export function newArticleCommand() {
  const program = new Command('article')

  program
    .description(article.description.command)
    .option('--slug <slug>', article.description.slug)
    .option('--title <title>', article.description.title, '')
    .option('--type <type>', article.description.type)
    .option('--emoji <emoji>', article.description.emoji)
    .option('--published <published>', article.description.published, false)
    .option('--publication-name <publicationName>', article.description.publicationName)
    .option('--machine-readable', article.description.machineReadable, false)
    .helpOption('--help -h', article.description.helpThis)
    .action(async (options) => {
      const type = options.type === 'idea' ? 'idea' : 'tech'
      const emoji = options.emoji || '✨'
      const published = options.published ? 'true' : 'false'
      const publicationName = options.publicationName
        ? options.publicationName.replace(/"/g, '\\"')
        : null

      const slug = await generateArticleSlug(options.slug)

      const fileName = `${slug}.md`
      const relativeFilePath = `articles/${fileName}`
      const fullFilePath = getWorkingPath(relativeFilePath)

      const fileBody =
        [
          '---',
          `title: "${options.title.replace(/"/g, '\\"')}"`,
          `emoji: "${emoji}"`,
          `type: "${type}" # tech: 技術記事 / idea: アイデア`,
          'topics: []',
          `published: ${published}`,
          publicationName,
          '---',
        ]
          .filter((v) => v)
          .join('\n') + '\n'

      try {
        generateFileIfNotExist(fullFilePath, fileBody)
        if (options.machineReadable) {
          console.log(relativeFilePath)
        } else {
          log.created(relativeFilePath)
        }
      } catch (err) {
        log.error(article.message.error)
        console.error(err)
      }
    })

  return program
}
