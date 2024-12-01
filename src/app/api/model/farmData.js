const mongoose = require("mongoose");

const farmDataSchema = new mongoose.Schema({
    incubatorTemp: String,
    incubatorHumi: String
});

module.exports = mongoose.models.farmData || mongoose.model("farmData", farmDataSchema);