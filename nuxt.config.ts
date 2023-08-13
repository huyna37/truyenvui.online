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
      ],
      link: [
        { rel: 'canonical', href:'https://Truyenvui.online/'},
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css', integrity: 'sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==', crossorigin: 'anonymous'}
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', crossorigin: 'anonymous' }
      ]
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASEAPI,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-lodash",
    ['@nuxtjs/robots', { configPath:'./robots.js' }]
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