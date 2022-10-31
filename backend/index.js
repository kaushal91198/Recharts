const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/dbConfig");

connectDB();

dotenv.config({ path: "config/config.env" });

app.listen(process.env.PORT, () => {
  console.log("this is first thing to develop  ");
});
