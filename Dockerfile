# ベースイメージ
FROM node:14

# 作業ディレクトリを設定
WORKDIR /usr/src/app

# 依存関係をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポートを開ける
EXPOSE 3000

# アプリを起動
CMD ["node", "index.js"]