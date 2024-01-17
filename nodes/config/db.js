import mongoose from "mongoose";
const URL = "mongodb://127.0.0.1:27017/samsung";

const connectDb = async () => {
  await mongoose.connect(URL);
  console.log("Connected to db server");
};

export default connectDb;
