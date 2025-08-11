import mongoose, { Schema, Document } from "mongoose";

export interface ICar extends Document {
  brand: string;
  carModel: string;
  year: number;
}

const carSchema: Schema = new Schema({
  brand: { type: String, required: true },
  carModel: { type: String, required: true },
  year: { type: Number, required: true },
});

export default mongoose.model<ICar>("Car", carSchema);
