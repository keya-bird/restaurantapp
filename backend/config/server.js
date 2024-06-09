const { env } = require('strapi');

module.exports = ({ env }) => ({
  // **Database Connection Configuration**
  connection: {
    client: env('DATABASE_CLIENT', 'postgres'),
    connection: {
      url: env('postgres://postgres2024:sw6tCa2ejpJkFbn4Em5erkZuXXtq7mik@dpg-cphjfc0cmk4c73ej56eg-a.oregon-postgres.render.com/nextapp_2703'),
    },
    pool: {
      min: 0,
      max: 10,
    },
  },

  // **App Keys Configuration**
  app: {
    keys: env.array('APP_KEYS', []), // Set a default empty array to avoid errors
  },

  // **Other Configurations** (Add your other Strapi configurations here)
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },


});
