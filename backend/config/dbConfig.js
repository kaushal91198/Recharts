const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

const connectDB = () => {
  mongoose
    .connect("mongodb+srv://kaushal91198:NlxCaHEFQHUE7IKe@cluster0.u3a0c78.mongodb.net/test", {
      //   useNewUrlParse: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
    })
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
