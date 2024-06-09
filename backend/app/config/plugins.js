import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import upload from "@strapi/plugin-upload/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    graphql: graphql,
    i18n: i18N,
    upload: upload,
    "users-permissions": usersPermissions,
    config: {
      jwtSecret: env('JWT_SECRET'),
  },
},
});
