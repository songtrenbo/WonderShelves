const mongoose = require("mongoose"),
  bcrypt = require("bcryptjs"),
  SALT_WORK_FACTOR = 10;
const { Schema } = mongoose;

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [{ type: Schema.Types.ObjectId, ref: "roles" }],
  },
  {
    versionKey: false,
  }
);

userSchema.pre("save", function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return next();
  }
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.method.comparePasswords = function (candidatePasswords, cb) {
  bcrypt.compare(candidatePasswords, this.password, function (err, isMath) {
    if (err) return cb(err);
    cb(null, isMath);
  });
};

const User = mongoose.model("users", userSchema);

module.exports = { User };
