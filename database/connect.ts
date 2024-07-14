import mongoose from "mongoose";
mongoose.set("strictQuery", false);

const connectToDatabase = () => {
  const URI = process.env.MONGO_URI;

  try {
    if (URI !== undefined) {
      const connect = mongoose.connect(URI);
      connect.then(() => console.log("CONNECTED TO DATABASE!"));
    } else {
      console.log("URI IS UNDEFINED!");
      console.log(URI);
    }
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

export default connectToDatabase;
