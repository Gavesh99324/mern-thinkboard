import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json()); //this middleware is used to parse JSON bodies. To access to req.body
app.use(rateLimiter); // this middleware is used to limit the number of requests from a single IP address

// simple custom middleware
app.use((req, res, next) => {
  console.log(`Req method is ${req.method} and Req URL is ${req.url} 🏆`);
  next();
});

app.use("/api/notes", notesRoutes); // This is a route middleware
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port", PORT, "🏆");
  });
});

 
// server.js > notesRoutes.js(routes files) > notesController.js(controller files/functions) > db.js > Note.js(models/schema)

