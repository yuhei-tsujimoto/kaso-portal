# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際ののガイダンスを提供します。  

## プロジェクト概要

仮想キャンパスポータルは、仮想大学仮想キャンパスの学生向けドキュメンテーションウェブサイトです。Zensical（静的サイトジェネレーター）で構築され、GitHub Pagesに自動デプロイされます。公開URL: <https://yuhei-tsujimoto.github.io/asaka-portal/>  

## 基本コマンド

### 開発環境のセットアップ

```bash  
# 仮想環境の作成と有効化
python3 -m venv .venv  
source .venv/bin/activate  

# 依存関係のインストール
pip install -r requirements.txt  
```  

### 開発ワークフロー

```bash  
# 開発サーバーの起動（変更時に自動リロード）
npm run dev  
# または直接実行:
source .venv/bin/activate && zensical serve  
# アクセス先: http://localhost:8000

# 静的サイトのビルド（site/ディレクトリに出力）
npm run build  
# または直接実行:
source .venv/bin/activate && zensical build  

# クリーンビルド（出力ディレクトリをクリア）
zensical build --clean  
```  

**注意:** Zensicalコマンドを実行する前に、必ず仮想環境を有効化してください。npmスクリプトは自動的にこれを処理します。  

## アーキテクチャ

### プロジェクト構造

```markdown  
asaka-portal/  
├── docs/                       # コンテンツソース（Markdownファイル）  
├── site/                       # ビルド出力（自動生成、gitには含まれない）  
├── .venv/                      # Python仮想環境（gitには含まれない）  
├── zensical.toml              # Zensical設定ファイル  
└── requirements.txt           # Python依存関係  
```  

### コンテンツ構成

- **コンテンツの場所:** すべてのドキュメントは`docs/`内にMarkdownファイルとして配置
- **カテゴリ構造:** 番号付きディレクトリがコンテンツカテゴリを定義（実際の構成は`docs/`ディレクトリを参照）
- **ナビゲーション:** `zensical.toml`で手動設定（実際の構成は`zensical.toml`の`nav`セクションを参照）
- **Frontmatter:** 不要（Zensicalがファイル名とディレクトリ構造から自動的にサイトを生成）

### Zensical設定

サイトは`zensical.toml`で設定されます:  

- **サイトメタデータ:** 名前、説明、著者、URL、著作権
- **言語:** 日本語（`ja`）
- **テーマ機能:** ナビゲーション、検索、コードハイライト、ダーク/ライトモード切替を含む
- **ナビゲーション:** `zensical.toml`の`nav`セクションで手動設定

有効化されている主な機能:  

- ハイライト付き全文検索（`search.highlight`）
- プリフェッチによる高速ナビゲーション
- コードのコピーボタンと注釈
- カスタムアイコン付きダーク/ライトモード切替

## デプロイ

### GitHub Actionsワークフロー

場所: `.github/workflows/docs.yml`  

- **トリガー:** `main`/`master`ブランチへのプッシュ、または手動ワークフロー実行
- **処理:** Python依存関係のインストール → `zensical build --clean` → GitHub Pagesへデプロイ
- **出力:** `github-pages`環境にデプロイ

### 手動デプロイ

デプロイはmainブランチへのプッシュで自動実行されます。手動でトリガーするには:  

1. GitHub Actionsタブに移動
2. 「Documentation」ワークフローを選択
3. 「Run workflow」をクリック

## コンテンツ開発

### 新規ページの追加

1. `docs/`配下の適切なカテゴリディレクトリにMarkdownファイルを作成
    - ファイル名に番号プレフィックスを付けて順序を制御（例：`01_ファイル名.md`）

### コンテンツスタイルガイドライン

#### 見出し階層

- **レベル2見出し（`##`）**: ページコンテンツを大きく分割する主要セクション
    - ページ内の主要な概念的区分に使用
    - ページの最初の見出しレベルとして使用

- **レベル3見出し（`###`）**: 標準的なサブセクション見出し（最も一般的に使用）

### サイト設定の変更

`zensical.toml`を編集して以下を変更:  

- サイトメタデータ（名前、説明、URL）
- テーマ機能（ナビゲーション、検索など）
- カラースキームオプション
- カスタムナビゲーション構造（`nav`セクションで設定）

### 検索機能

サイトは、ユーザーが情報を見つけるための主要な方法として全文検索機能を備えています。ホームページではこの機能を目立つように強調しています。コンテンツを追加する際は、見つけやすさを向上させるため、明確で検索可能なキーワードを使用してください。  

## 依存関係

- **Zensical:** 0.0.9（静的サイトジェネレーター）
- **Python:** 3.x必須
- **主要なPythonパッケージ:** markdown、pygments、pymdown-extensions（`requirements.txt`を参照）

## デプロイURL

本番サイト: <https://yuhei-tsujimoto.github.io/asaka-portal/>  
