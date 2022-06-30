const { connectDB } = require("../config/db.config");
const bcrypt = require("bcryptjs");
const { User } = require("../models/user.model");
const { Role } = require("../models/role.model");
const logger = require("../logger/api.logger");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { response } = require("express");

class UserRepository {
  constructor() {
    connectDB();
  }
  async register(user) {
    let data = {};
    try {
      if (
        user.email === null ||
        user.password === null ||
        user.fullName === null
      ) {
        return (response.statusCode = 400);
      }

      const oldUser = await User.findOne({ email: user.email });

      if (oldUser) {
        return (response.statusCode = 409);
      }

      let encryptedPassword = await bcrypt.hash(user.password, 10);

      // Create token
      const userRole = await Role.findOne({ name: "User" });
      const token = jwt.sign(
        { user_id: user._id, email: user.email, roles: userRole._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      data = await User.create({
        fullName: user.fullName,
        email: user.email.toLowerCase(),
        password: user.password,
        roles: userRole._id,
        token: token,
      });
      // return new user
      return data;
    } catch (err) {
      logger.error("Error: " + err);
    }
    return data;
  }

  async login(user) {
    let data = {};
    try {
      if (!(user.email && user.password)) {
        return response.status(400).send("All input is required");
      }
      const userData = await User.findOne({ email: user.email });
      if (userData && bcrypt.compareSync(user.password, userData.password)===true) {
        const role = await Role.findOne({ _id: userData.roles });
            var token = await jwt.sign(
              {
                user_id: userData._id,
                fullName: userData.fullName,
                email: userData.email,
                roles: role.name,
              },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            );
            await User.findByIdAndUpdate(userData._id, { token: token });
            return token;
      }
      else{
        return response.status(400);
      }
    } catch (err) {
      logger.error("Error: " + err);
    }
  }
}
module.exports = new UserRepository();
