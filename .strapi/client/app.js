/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import netlifyDeployments from "strapi-plugin-netlify-deployments/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "users-permissions": usersPermissions,
    "netlify-deployments": netlifyDeployments,
  },
});
