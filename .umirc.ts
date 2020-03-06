import { defineConfig } from 'umi';

export default defineConfig({
  presets: ['@umijs/preset-ui'],
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
});
