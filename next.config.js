module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com']
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://bit.ly/mezodiscord',
        permanent: false
      }
    ];
  }
}
