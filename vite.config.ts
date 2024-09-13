import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { describe, it, expect } from 'vitest';
import jsdom from 'jsdom';
import path from 'path';

const { JSDOM } = jsdom;
export default defineConfig({
  plugins: [
    vue({
      css: {
        // 确保 less 文件被正确处理
        loaderOptions: {
          less: {}
        }
      }
    })
  ],
  test: {
    globals: true,
    //  setupFiles: './vitest-setup.ts',
    // 配置 jsdom
    environment: 'jsdom',
    testTimeout: 30000,
    cache: {
      dir: 'node_modules/.vitest',
    },
  },
  build: {
    lib: {
      entry: 'packages/index.ts', // 组件库入口文件
      name: 'MyComponents', // 打包后的库文件名
      formats:['es','umd'],
      fileName: (format) => `my-components.${format}.js`, // 打包后的文件扩展名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 提供全局变量，当使用库时可以通过这个全局变量访问你的组件
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});