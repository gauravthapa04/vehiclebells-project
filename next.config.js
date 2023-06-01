/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5:true,
  webpack:(config) =>{
    config.resolve.fallback = {
      net: false,
      dns: false,
      tls: false,
      assert: false,
      // fixes next-i18next dependencies
      path: false,
      fs: false,
      // fixes mapbox dependencies
      events: false,
      // fixes sentry dependencies
      process: false
    };
    return config;

  },
  serverRuntimeConfig: {
      connectionString: process.env.MONGODB_URI,
      secret: 'THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/api' // development api
          : 'http://localhost:3000/api' // production api
  }
}

module.exports = nextConfig
