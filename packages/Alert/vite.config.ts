import { defineConfig } from 'vite';
import baseConfig from '../../vite.config'; // 引入根目录的配置

export default defineConfig({
    ...baseConfig,
    build: {
      lib: {
        entry: 'lib/Alert.js', // 组件库入口文件
        name: 'Alert', // 打包后的库文件名
        formats:['es','umd'],
        fileName: (format) => `Alert.${format}.js`, // 打包后的文件扩展名
      },
      },
});