export function getAllNotes(req, res) {
  res.status(200).send("you just fetched the notes");
}

export function createNote(req, res) {
  res.status(201).json({ message: "Note created successfully" });
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Note updated successfully" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfully" });
}

// mongodb+srv://gtj99324_db_user:3gANLj8QpwLPRwCN@cluster0.1qwgsnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

