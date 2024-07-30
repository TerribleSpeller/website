const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Use "domains" instead of "remotePatterns" if specifying only the domain
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }

module.exports = nextConfig