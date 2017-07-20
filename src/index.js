import next from "next";
import path from "path";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import BookRouter from "./routers/BookRouter";

// Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/checkpoint2");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("MongoDB connection successful");
});

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({
  dev,
  dir: path.resolve(__dirname)
});
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 3001;

nextApp.prepare().then(() => {
  const app = express();

  // init middlewares
  app.use(bodyParser.json());

  // Define all you backend handlers here...
  app.use(BookRouter);

  // Handle everything that is not covered in above routes with next.js
  app.get("*", (request, response) => {
    return handle(request, response);
  });

  // Error handler middlewares
  // eslint-disable-next-line
  app.use("*", (errors, request, response, nextCallback) => {
    return response.status(500).json({
      message: errors.message
    });
  });

  app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('Server listening on port ' + PORT);
  });
});
