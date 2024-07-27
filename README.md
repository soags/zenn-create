# Zenn Create

[Zenn CLI](https://zenn.dev/zenn/articles/install-zenn-cli) の`new:article`、`new:book`の動作を改良する非公式のCLIツール。

## 特徴

### 記事の作成

- slug を指定した場合、Zennに既に登録されている記事と衝突するかどうかをチェックします。
- slug 指定時に`user-selected-slug-*`という形で`*`を指定すると、その部分にランダム文字列を挿入します。

### 本の作成

まだ実装されていません。

## インストール

```shell
npm install zenn-create zenn-cli
```

## 使用方法

```shell
$ zenn-create article
created: articles/d3786564c79ebd.md
```

```shell
$ zenn-create article --slug this-is-enable-slug
created: articles/this-is-enable-slug.md
```

```shell
$ zenn-create article --slug what
error: slugの値（what）が不正です。小文字の半角英数字（a-z0-9）、ハイフン（-）、アンダースコア（_）の12〜50字の組み合わせにしてください
```

```shell
$ zenn-create article --slug what-is-slug
error: slugの値（what-is-slug）が不正です。このslugは既に使われています。
```

```shell
$ zenn-create article --slug what-is-slug-*
created: articles/what-is-slug-9d9c0da1a6a482.md
```

## ライセンス

[MIT](LICENSE)
