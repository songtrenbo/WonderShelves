const { Role } = require("../models/role.model");
const mongoose = require("mongoose");
require("dotenv").config();
async function seedRoles() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const Roles = [
    new Role({
      name: "User",
    }),
    new Role({
      name: "Admin",
    }),
  ];

  for (role of Roles) {
    var newRole = new Role(role);
    await newRole.save();
  }
}
module.exports = {
  seedRoles,
};
