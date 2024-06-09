const { env } = require('strapi');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  database: {
    connection: {
      client: env('DATABASE_CLIENT', 'postgres'),
      connection: {
        url: env('postgres://default:dYibNMf68uCF@ep-little-rain-a47dzfy6-pooler.us-east-1.aws.neon.tech/verceldb?sslmode=require'),
        user: env('default'),
        password: env('dYibNMf68uCF'),
      },
      pool: {
        min: 0,
        max: 10,
      },
    },
  },
});
