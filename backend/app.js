const express = require("express");

const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const product = require("./routes/productRoute");
const sales = require("./routes/salesRoute");
const customerbase = require("./routes/customerBaseRoute");
const financial = require("./routes/financialRoute");
const inventory = require("./routes/inventoryRoute");
const demandAndSupply = require("./routes/demandAndSupplyRoute");

app.use(express.json());
app.use("/api/v1", product);
app.use("/api/v1", sales);
app.use("/api/v1", customerbase);
app.use("/api/v1", financial);
app.use("/api/v1", inventory);
app.use("/api/v1", demandAndSupply);


module.exports = app;
