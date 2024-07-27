import path from 'path'
import fs from 'fs-extra'
import * as log from './log'
import { common } from './messages'

export function generateFileIfNotExist(fullpath: string, content: string) {
  fs.outputFileSync(fullpath, content, { flag: 'wx' })
}

export function getWorkingPath(pathFromWorkingDir: string): string {
  if (/\.\./.test(pathFromWorkingDir)) {
    log.error(common.message.invalidWorkingPath)
    process.exit(1)
  }
  return path.join(process.cwd(), pathFromWorkingDir.replace(/^\//, ''))
}
