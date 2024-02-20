module.exports = ({ env }) => ({
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  url: env('RENDER_HOST_URL'),
  app: {
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  session: {
    secret: env('SESSION_SECRET'),
    cookie: {
      secure: env.bool('SESSION_SECURE', true), // Set to true if you're using HTTPS
      maxAge: 86400000, // 24 hours
      sameSite: 'none', // Allows cookies to be sent over cross-site requests
    },
  },
})
