import express from "express";

const app = express();

app.get("/api/notes", (req, res) => {
  // get a note
  res.status(200).send("you got 30 notes");
});

app.post("/api/notes", (req, res) => {
  //create a note
  res.status(201).send("you created 5 notes");
});

app.delete("/api/notes", (req, res) => {
  // delete a note
  res.send("you delete 5 notes");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001 🏆");
});
