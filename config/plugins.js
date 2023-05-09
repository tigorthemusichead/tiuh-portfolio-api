module.exports = ({ env }) => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 3, // Default is 5
    }
  },
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.example.com'),
      port: env('SMTP_PORT', 587),
      auth: {
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
      // ... any custom nodemailer options
    },
    settings: {
      defaultFrom: env('SMTP_USERNAME'),
      defaultReplyTo: env('SMTP_USERNAME'),
    },
  },
});
