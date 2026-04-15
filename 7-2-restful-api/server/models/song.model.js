import mongoose from "mongoose";

// db schema
const songSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    artist: { type: String, required: true, trim: true },
    year: { type: Number, min: 0, max: 9999 },
  },
  { timestamps: true }
);

export const Song = mongoose.model("Song", songSchema);
