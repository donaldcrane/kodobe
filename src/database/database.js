const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const moongoseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = async () => {
  const connection = await mongoose.connect(`${process.env.DATABASE_URL}`, moongoseConfig);
  if (!connection) {
    console.log("DATABASE connection failed! Exiting Now");
  }
  console.log("DATABASE connected successfully!");

  return connection;
};

module.exports = { connect };
