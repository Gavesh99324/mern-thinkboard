import mongoose from "mongoose";

// create schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //automatically add created at and updated at fields)
);

//model based off of that schema
  
const Note = mongoose.model("Note", noteSchema);
export default Note;
