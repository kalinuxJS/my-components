import { defineConfig } from 'vite';
import baseConfig from '../../vite.config'; // 引入根目录的配置

export default defineConfig({
    ...baseConfig,
    build: {
      lib: {
        entry: 'lib/Button.js', // 组件库入口文件
        name: 'Button', // 打包后的库文件名
        formats:['es','umd'],
        fileName: (format) => `Button.${format}.js`, // 打包后的文件扩展名
      },
      },
});