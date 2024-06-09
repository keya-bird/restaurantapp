const { env } = require('strapi');

connection: {
  client: env('DATABASE_CLIENT', 'postgres'),
  connection: {
    url: env('postgres://postgres2024:sw6tCa2ejpJkFbn4Em5erkZuXXtq7mik@{{postgres_host}}/nextapp_2703?sslmode=require'), // Use placeholder and add sslmode
  },
  pool: {
    min: 0,
    max: 10,
  },
},

