# Tsumoo Dev Log

Tsumoo の公開開発ログ・技術メモ用リポジトリです。

製品コード本体は非公開リポジトリで管理し、このリポジトリでは公開可能な開発ログ、技術選定、設計判断、学習メモのみを扱います。

## 公開サイト

GitHub Pages で公開する想定です。

- Site: https://tomo1185.github.io/tsumoo-dev-log/

## Tsumoo について

Tsumoo は、毎日の小さなタスクや仕事・学習で使う少し重いタスクを手軽に記録し、完了した行動を気持ちよく積み上げるためのセルフマネジメントアプリです。

フェーズ1では、チェック型タスク、ステータス型タスク、完了体験、振り返り、設定画面、認証処理の実装を進めています。

## 公開する内容

- 開発ログ
- ロードマップと進捗
- 技術選定の理由
- 公開して問題ない設計判断
- UI/UX の調整記録
- 学習メモ

## 公開しない内容

- 製品コード本体
- 詳細な内部仕様
- DB設計の詳細
- API仕様の詳細
- 環境変数、APIキー、シークレット
- 認証やセキュリティ実装の詳細
- 未公開の製品化構想

## ドキュメント構成

```text
docs/
├── index.md                 # 公開サイトのトップ
├── overview/                # プロジェクト概要・公開方針
├── roadmap/                 # 全体ロードマップ・フェーズ計画
├── architecture/            # 技術メモ
├── decisions/               # 設計判断
├── dev-logs/                # 日次開発ログ
├── learnings/               # 学習メモ
└── samples/                 # 公開用サンプル置き場
```

## 開発ログの追加手順

1. `docs/dev-logs/YYYY-MM/YYYY-MM-DD.md` を追加する
2. `docs/index.md` の最新ログリンクと進捗を更新する
3. `docs/roadmap/project-roadmap.md` の完了数・次に着手する内容を更新する
4. 必要に応じて `docs/.vitepress/config.ts` のナビゲーションやサイドバーを更新する
5. `npm run docs:build` でビルドを確認する

## ローカル確認

```bash
npm install
npm run docs:dev
```

## ビルド確認

```bash
npm run docs:build
```

## プレビュー

```bash
npm run docs:preview
```

## GitHub Pages

GitHub Pages は GitHub Actions からデプロイする想定です。

GitHub のリポジトリ設定で Pages の Source を `GitHub Actions` に設定します。
