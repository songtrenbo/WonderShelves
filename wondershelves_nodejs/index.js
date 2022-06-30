const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const books = require("./routes/book.route");
const categories = require("./routes/category.route");
const users = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 3000;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "WonderShelves API",
      description: "WonderShelves API Information",
      servers: ["http://localhost:5001"],
    },
    securityDefinitions: {
      Bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [
      {
        Bearer: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

var corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api", books);
app.use("/api", users);
app.use("/api", categories);

app.get("/", (req, res) => {
  res.send(`<h1>API Works !!!</h1>`);
});
app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
  console.log(`View swagger on:   http://localhost:${port}/api-docs`);
});
