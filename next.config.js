/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = nextTranslate({
  reactStrictMode: true,
  i18n:{
    locales: ["fa","en"],
    defaultLocale:"fa"
  }
})

module.exports = nextConfig
