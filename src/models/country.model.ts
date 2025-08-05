import mongoose from "mongoose";

// Define schema for test data (e.g., country details)

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  continent: { type: String, required: true },
  population: { type: Number },
});

const CountryModel = mongoose.model("Country", countrySchema);
export default CountryModel;