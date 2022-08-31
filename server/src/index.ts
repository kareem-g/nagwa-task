import express from "express";
import words from "./Controllers/words";
import ranks from "./Controllers/ranks";
import cors from "cors";

const app = express();
app.use(express.json());
words(app);
ranks(app);
app.use(cors());

app.listen(5558, () => {
  console.log("Server started on port 5558");
});
