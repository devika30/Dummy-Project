/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        REACT_APP_API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT,
      },
  };
  
  module.exports = nextConfig;
  