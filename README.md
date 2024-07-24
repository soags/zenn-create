# Zenn Slugged

[Zenn CLI](https://zenn.dev/zenn/articles/install-zenn-cli) のSlug 関連の動作を変更する非公式のラッパーCLIです。

## 特徴

- `new:article`コマンドのSlugが必須になります。
- Slug の衝突チェックを行います。(Zenn API を使用します。)

## インストール

```shell
npm install zenn-slugged zenn-cli
```

## 使用方法

```shell
zenns new:article <slug> [options]
```

```shell
$ zenns new:article what-is-slug

slugの値（what-is-slug）が不正です。このslugは既に使われています。
```

## 補足

- `new:article`以外の機能はありません。Zenn CLIを使用してください。
- Zenn CLIのフォークではなく、内部的にZenn CLIを呼び出しています。

## ライセンス

[MIT](LICENSE)
