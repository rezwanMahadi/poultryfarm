const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    email: String,
    pass: String,
    farmID: String
});

module.exports = mongoose.models.userData || mongoose.model("userData", userDataSchema);