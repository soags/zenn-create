import crypto from 'crypto'
import * as log from './log'
import { article } from './messages'

export async function generateArticleSlug(slug: string | undefined): Promise<string> {
  // slugが指定されていない場合、ランダムなslugを生成
  if (slug === undefined) {
    return generateRandomSlug()
  }

  if (slug.includes('*')) {
    // slugに*が含まれている場合、最初の*をランダム値に置換、他は削除
    const randomSlug = generateRandomSlug()
    const generatedSlug = slug.replace('*', randomSlug).replace(/\*/g, '').slice(0, 50)

    // 挿入後にslugフォーマットチェック
    if (!validateSlugFormat(generatedSlug)) {
      log.error(article.message.slugFormatError(generatedSlug))
      process.exit(1)
    }

    return generatedSlug
  } else {
    // slugフォーマットチェック
    if (!validateSlugFormat(slug)) {
      log.error(article.message.slugFormatError(slug))
      process.exit(1)
    }

    // 指定されたslugを使用し重複時はエラーとする
    if (!(await validateSlugConflict(slug))) {
      log.error(article.message.slugConflictError(slug))
      process.exit(1)
    }
    return slug
  }
}

function generateRandomSlug(): string {
  return crypto.randomBytes(7).toString('hex')
}

function validateSlugFormat(slug: string) {
  if (!slug) return false
  return /^[0-9a-z\-_*]{12,50}$/.test(slug)
}

async function validateSlugConflict(slug: string) {
  const res = await fetch(`https://zenn.dev/api/articles/${slug}`)
  return res.status === 404
}
