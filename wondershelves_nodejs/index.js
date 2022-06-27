const express = require('express');
require('dotenv').config();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');


const books = require('./routes/book.route');

const app = express();
const port = process.env.PORT || 3000;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer"
      },
      servers: ["http://localhost:5001"]
    }
  },
  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use('/api', books);

app.get('/', (req, res) => {
  res.send(`<h1>API Works !!!</h1>`)
});

app.listen(port, () => {
  console.log(`Server listening on the port  ${port}`);
})