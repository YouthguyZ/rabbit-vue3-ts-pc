import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 让组件 script 标签支持 name 属性
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueSetupExtend()],
  server: {
    port: 11111
  },
  resolve: {
    // 让 @ 指向 src
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    // 默认在所有的组件中自动混入 css 样式
    preprocessorOptions: {
      less: {
        additionalData: `
          @import "@/assets/styles/variables.less";
          @import "@/assets/styles/mixins.less";
        `
      }
    }
  }
})
