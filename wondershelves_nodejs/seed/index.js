const { seedBook } = require("./book.seed");
const { seedCategories } = require("./category.seed");
const { seedUsers } = require("./user.seed");
const { seedRoles } = require("./role.seed");

(async () => {
  await seedCategories();
  await seedRoles();
  seedBook();
  seedUsers();
})();
