export type NewArticleArgs = {
  slug: string
  title: string | undefined
  type: string | undefined
  emoji: string | undefined
  published: boolean
  publicationName: string | undefined
  machineReadable: boolean
  help: boolean
}
