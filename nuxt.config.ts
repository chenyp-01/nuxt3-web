// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/reset.css', '~/assets/styles/main.less'],
  app: {
    head: {
      title: '公司官网 - 提供优质服务',
      meta: [
        { name: 'description', content: '我们致力于提供高品质的企业服务' },
        { name: 'keywords', content: '企业官网, 业务增长, 高端服务' },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            'primary-color': '#42b983', // 这里可以修改 LESS 变量
          },
          javascriptEnabled: true, // 启用 JavaScript 代码支持
        },
      },
    },
  },
})
