# Zensical セットアップガイド

このプロジェクトはZensical用に設定されています。  

## 設定ファイル

以下の設定ファイルが作成されています：  

- `zensical.toml` - Zensicalのメイン設定ファイル（TOML形式）
- `.gitignore` - ビルド出力とキャッシュの除外設定
- `requirements.txt` - Python依存関係
- `package.json` - npmスクリプト設定

## セットアップ手順

### 1. 仮想環境の作成とZensicalのインストール

```bash  
# 仮想環境を作成（既に作成済みの場合はスキップ）
python3 -m venv .venv  

# 仮想環境を有効化
source .venv/bin/activate  

# Zensicalと依存関係をインストール
pip install -r requirements.txt  
```  

### 2. 開発サーバーの起動

```bash  
# 仮想環境を有効化
source .venv/bin/activate  

# 開発サーバーを起動
zensical serve  
# または
npm run dev  
```  

ブラウザで `http://localhost:8000` にアクセスしてサイトを確認できます。  

### 3. ビルド

```bash  
# 仮想環境を有効化
source .venv/bin/activate  

# サイトをビルド
zensical build  
# または
npm run build  
```  

ビルドされたサイトは `site/` ディレクトリに出力されます。  

## プロジェクト構造

```  
asaka-portal/  
├── docs/                    # ドキュメントソース（Markdownファイル）  
├── site/                    # ビルド出力（生成される）  
├── .venv/                   # Python仮想環境  
├── zensical.toml           # Zensical設定ファイル  
├── requirements.txt        # Python依存関係  
└── package.json            # npmスクリプト  
```

実際のコンテンツ構成は`docs/`ディレクトリと`zensical.toml`の`nav`セクションを参照してください。  

## 設定のカスタマイズ

`zensical.toml` ファイルを編集することで、サイトの設定を変更できます：  

- `site_name`: サイト名
- `site_description`: サイトの説明
- `nav`: ナビゲーション構造
- `language`: 言語設定（現在は日本語 "ja"）
- `features`: 有効にする機能のリスト

詳細は [Zensical公式ドキュメント](https://zensical.org/docs/) を参照してください。  
