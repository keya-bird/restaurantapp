const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'pg', // Use 'pg' for PostgreSQL
    connection: {
      host: 'dpg-cphjfc0cmk4c73ej56eg-a', // Replace with your actual Render PostgreSQL hostname
      port: 5432, // Default PostgreSQL port
      database: 'nextapp_2703', // Replace with your database name
      user: 'postgres2024', // Replace with your PostgreSQL username
      password: 'sw6tCa2ejpJkFbn4Em5erkZuXXtq7mik', // Replace with your PostgreSQL password
    },
    useNullAsDefault: true,
  },
});
