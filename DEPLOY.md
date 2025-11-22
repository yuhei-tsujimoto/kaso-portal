# GitHub Pages デプロイガイド

このプロジェクトはGitHub Pagesで自動的に公開されます。  

## セットアップ手順

### 1. GitHubリポジトリの設定

1. GitHubリポジトリの **Settings** に移動
2. 左サイドバーから **Pages** を選択
3. **Source** で **GitHub Actions** を選択
4. 設定を保存

### 2. 自動デプロイ

以下のいずれかの条件で自動的にデプロイされます：  

- `main` または `master` ブランチにプッシュしたとき
- GitHub Actionsのワークフローを手動で実行したとき（**Actions** タブから実行可能）

### 3. サイトのURL

デプロイが完了すると、以下のURLでサイトにアクセスできます：  

**<https://yuhei-tsujimoto.github.io/asaka-portal/>**  

## デプロイの確認

1. GitHubリポジトリの **Actions** タブでワークフローの実行状況を確認
2. デプロイが完了すると、**Environments** セクションに **github-pages** が表示されます
3. 数分待ってから、上記のURLにアクセスしてサイトを確認

## トラブルシューティング

### デプロイが失敗する場合

1. **Actions** タブでエラーログを確認
2. `zensical.toml` の設定が正しいか確認
3. `requirements.txt` に必要な依存関係が含まれているか確認

### サイトが表示されない場合

1. GitHub Pagesの設定で **Source** が **GitHub Actions** になっているか確認
2. デプロイが完了しているか確認（**Actions** タブで確認）
3. ブラウザのキャッシュをクリアして再読み込み

## ローカルでの確認

デプロイ前にローカルで確認する場合：  

```bash  
source .venv/bin/activate  
zensical build  
zensical serve  
```  

ブラウザで `http://localhost:8000` にアクセスして確認できます。  
