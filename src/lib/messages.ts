const common = {
  message: {
    invalidWorkingPath:
      '取得するファイル/ディレクトリの名前に不正な文字列が含まれているため処理を終了します',
  },
  description: {
    help: 'ヘルプ',
    helpCommand: 'コマンドのヘルプ',
    version: 'zenn-createのバージョンを表示',
  },
} as const

const article = {
  message: {
    slugFormatError: (slug: string) =>
      `slugの値（${slug}）が不正です。小文字の半角英数字（a-z0-9）、ハイフン（-）、アンダースコア（_）の12〜50字の組み合わせにしてください`,
    slugConflictError: (slug: string) =>
      `slugの値（${slug}）が不正です。このslugは既に使われています。`,
    error: '記事のファイル作成時にエラーが発生しました',
  },
  description: {
    command: '新しい記事を追加',
    slug: '記事のスラッグ([a-z0-9-_]{12,50}). 指定しない場合はランダム生成. slugに"*"が含まれている場合はランダム値を挿入',
    title: '記事のタイトル',
    type: '記事のタイプ. tech (技術記事) / idea (アイデア記事) のどちらかから選択',
    emoji: 'アイキャッチとして使われる絵文字（1文字だけ）',
    published: '公開設定. true か false を指定する. デフォルトで"false"',
    publicationName: 'Publication名. Zenn Publication に紐付ける場合のみ指定',
    machineReadable: '作成成功時にファイル名のみを出力する',
    helpThis: 'このヘルプを表示',
  },
} as const

const book = {
  description: {
    command: '新しい本を追加',
  },
} as const

export { common, article, book }
