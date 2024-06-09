module.exports = ({ env }) => ({
  port: env.int('PORT', 1337),
connection: {
  client: env('DATABASE_CLIENT', 'postgres'),
  connection: {
    url: env('postgres://postgres2024:sw6tCa2ejpJkFbn4Em5erkZuXXtq7mik@{{postgres_host}}/nextapp_2703?sslmode=require'), // Use placeholder and add sslmode
  app: {
    keys: env.array(["aW2olD4It8bifkvZIU2u+g==", "QJhqnaA00qbYAhI20SjxJw==", "zWOcDmYfk5qURWd9NOLldw==", "3to5BodorPBGvtj4qD+hdA=="]),
  pool: {
    min: 0,
    max: 10,
  },
}
  }
}
});
