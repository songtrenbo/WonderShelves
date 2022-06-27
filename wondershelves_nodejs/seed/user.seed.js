
const { User } = require("../models/user.model");
const { Role } = require("../models/role.model");
const mongoose = require("mongoose");
require("dotenv").config();
async function seedUsers() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const userRole = await Role.findOne({ name: "User" });
  const adminRole = await Role.findOne({ name: "Admin" });
  const users = [
    new User({
        fullName: "Nguyen Van A",
          username: "VanA123",
          password: "VanA@123",
          roles: userRole._id
    }),
    new User({
        fullName: "Tran Van B",
          username: "VanB123",
          password: "VanB@123",
          roles: userRole._id
    }),
    new User({
        fullName: "Lam Van D",
          username: "VanD123",
          password: "VanD@123",
          roles: adminRole._id
    }),
  ];

  for (user of users) {
    var newUser = new User(user);
    await newUser.save();
  }
}
module.exports = {
    seedUsers,
};
