import mongoose, { model } from "mongoose";
const userMetaSchema = new mongoose.Schema({
    userId: Number,
    key: String,
    value: String
  });

export default mongoose.models.UserMeta || mongoose.model("UserMeta", userMetaSchema);