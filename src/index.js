import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Connection failed error app.on ", error);
      throw error;
    });
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Database running on port (src/index.js) ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed: ", error);
  });
