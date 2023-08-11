module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        port: '3005',
        exec_mode: 'cluster',
        script: './.output/server/index.mjs'
      }
    ]
  }
  