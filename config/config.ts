import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    // stream: true,
  },
  dynamicImport: {},
  antd: {
    compact: true,
  },
  locale: {
    antd: true,
  },
  layout: false,
  nodeModulesTransform: {
    type: 'none',
  },
  proxy: {
    '/todos': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
    },
  },
  request: {},
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/bar', component: '@/pages/bar' },
        { path: '/news', component: '@/pages/news' },
        { path: '/news/:id', component: '@/pages/newsDetail' },
      ],
    },
  ],
});
