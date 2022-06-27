// const { Category } = require("../models/category.model");
// const { connectDB, disconnectDB } = require("../config/db.config");

// class CategoryData {
//     constructor() {
//       connectDB();
//     }
//     async seedCategory(){
//         const categories = [
//             new Category({
//               name: "drama",
//             }),
//             new Category({
//               name: "comedy",
//             }),
//             new Category({
//               name: "sport",
//             }),
//           ];
//           var done = 0;
//           for (let i = 0; i < categories.length; i++) {
//             categories[i].save(function (err, result){
//                 done++;
//                 if(done===categories.length){
//                     disconnectDB();
//                 }
//             });
//           }
//           console.log("Seed category data successfully")
//     }
// };

// module.exports = new CategoryData();

// const { Category } = require("../models/category.model");
// const mongoose = require("mongoose");
// require("dotenv").config();

// const SeedCategory = async () => {
//   const categories = [
//     new Category({
//       name: "drama",
//     }),
//     new Category({
//       name: "comedy",
//     }),
//     new Category({
//       name: "sport",
//     }),
//   ];
//   mongoose
//     .connect(process.env.MONGO_URI, { useNewUrlParser: true })
//     .catch((err) => {
//       console.log(err.stack);
//       process.exit(1);
//     })
//     .then(() => {
//       console.log("connected to db in development environment");
//     });
//   categories.map(async (category, index) => {
//     await category.save((err, result) => {
//       if (index === categories.length - 1) {
//         mongoose.disconnect();
//       }
//     });
//   });
// };

// module.exports = {SeedCategory}

const { Category } = require("../models/category.model");
const mongoose = require("mongoose");
require("dotenv").config();
async function seedCategories() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const categories = [
    new Category({
      name: "drama",
    }),
    new Category({
      name: "comedy",
    }),
    new Category({
      name: "sport",
    }),
  ];

  for (category of categories) {
    var newCategory = new Category(category);
    await newCategory.save();
  }
}
module.exports = {
  seedCategories,
};
