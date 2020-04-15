import { defineConfig } from 'umi';

export default defineConfig({
  antd: {
    compact: true,
    dark: true,
  },
  locale: {
    antd: true
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
        },
        {
          path: '/bar',
          component: '@/pages/bar',
          keepAlive: true,
        }
      ]
    },
  ],
})
