const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  name: String,
  dob: String,
  number: String,
  email: String,
  address: String,
  city: String,
  addi: String,
  resume: String
});

const ApplicationModel = mongoose.model("applications", ApplicationSchema);
module.exports = ApplicationModel;

