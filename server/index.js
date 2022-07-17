require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const auth = require("./routes/auth");
const post = require("./routes/post");

const ConectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://minhdat:200599@mern-learn.rkko637.mongodb.net/mern-learn?retryWrites=true&w=majority`,
      {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
      }
    );
    console.log("connet thanh cong");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

ConectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth", auth);
app.use("/api/post", post);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server is connect ${PORT}`));
