export default defineNuxtConfig({
  // devtools: { enabled: true },
  app: {
    head: {
      title: 'Truyen Vui',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tuyển tập những truyện mới nhất | Truyenvui.online' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'keywords', content: 'Truyenvui.online, Truyenvui luôn cập nhật 24/24' },
        { name: 'og:title', content: 'Tuyển tập những truyện mới nhất | Truyenvui.online' },
        { name: 'og:description', content: 'Truyện Mới hàng ngày!' },
        { name: 'og:image', content: 'https://s199.imacdn.com/tt24/2022/08/20/a1d6f1225feaed6f_3dcdf651b16b6157_78077166097978499674.jpg' },
        { name: 'og:image:width', content: '512' },
        { name: 'og:image:height', content: '512' },
        { name: 'robots', content: 'index,follow' },
        { name: 'revisit-after', content: '1 days' },
        { name: 'ROBOTS', content: 'index,follow,noodp' },
        { name: 'googlebot', content: 'index,follow' },
        { name: 'BingBOT', content: 'index,follow' },
        { name: 'yahooBOT', content: 'index,follow' },
        { name: 'slurp', content: 'index,follow' },
        { name: 'msnbot', content: 'index,follow' },
        { name: 'monetag', content: 'b09f338d34fa492356d6fc35ad3657d5' },
      ],
      link: [
        { rel: 'canonical', href: 'https://Truyenvui.online/' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', integrity: 'sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM', crossorigin: 'anonymous' },
        {
          rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css", integrity: "sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==",
          crossorigin: "anonymous", referrerpolicy: "no-referrer"
        }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-EXJW9XLSCZ' }
      ]
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASEAPI,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-lodash',
    ['@nuxtjs/robots', { configPath: './robots.js' }],
    'nuxt-time',
    '@nuxt/image'
  ],
  devServer: {
    port: 3001
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
    ],
  }
})