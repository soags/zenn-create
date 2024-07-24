function getSlugDuplicateMessage(slug: string): string {
  return `slugの値（${slug}）が不正です。このslugは既に使われています。`
}

async function getUnexpectedErrorMessage(res: Response): Promise<string> {
  return `予期せぬエラーが発生しました。\nHTTP Status Code: ${
    res.status
  }\n\n${JSON.stringify(await res.json(), null, 2)}`
}

export {
  getSlugDuplicateMessage as getSlugRemoteDuplicateMessage,
  getUnexpectedErrorMessage,
}
