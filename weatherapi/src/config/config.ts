export const config = () => ({
    port: process.env.PORT || 3000,
    key: process.env.KEY || '',
    host: process.env.HOST || 'localhost'
  })