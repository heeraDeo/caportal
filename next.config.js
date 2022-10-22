/**@type {import('next').NextConfig}
 */
const withPWA = require('next-pwa')({
  customWorkerDir: 'serviceworker'
})
 

module.exports = withPWA({
  pwa: {
    dest: 'public',
  },
})

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
