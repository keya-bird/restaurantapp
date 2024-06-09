module.exports = ({ env }) => ({
  port: env.int('PORT', 1337),
connection: {
  client: env('DATABASE_CLIENT', 'postgres'),
  connection: {
    url: env('postgres://postgres2024:sw6tCa2ejpJkFbn4Em5erkZuXXtq7mik@{{postgres_host}}/nextapp_2703?sslmode=require'), // Use placeholder and add sslmode
  app: {
    keys: env.array('APP_KEYS'),
  pool: {
    min: 0,
    max: 10,
  },
}
  }
}
});
