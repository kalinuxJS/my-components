import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { describe, it, expect } from 'vitest';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
export default defineConfig({
  plugins: [vue()],
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
});