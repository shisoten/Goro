import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, //同じネットワーク内の他のデバイスからの接続を許可
    port: 5173, //開発サーバが使用するポート番号
  }
})
