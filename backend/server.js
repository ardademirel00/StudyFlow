import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import teachRoute from "./routes/teach.js";
import quizRoute from "./routes/quiz.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/teach", teachRoute);
app.use("/quiz", quizRoute);

app.get("/", (req, res) => {
  res.send("Tutorly API running");
});

app.listen(5000, () => console.log("Server running on port 5000"));
