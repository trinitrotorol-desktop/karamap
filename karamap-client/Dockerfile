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

# ビルド
RUN npm run build

# サーバーを起動
CMD ["npm", "start"]