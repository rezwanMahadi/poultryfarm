const mongoose = require("mongoose");

const farmDataSchema = new mongoose.Schema({
    farmID: String,
    incubatorTemp: String,
    incubatorHumi: String,
    brooderTemp: String,
    brooderHumi: String,
    bigChickTemp: String
});

module.exports = mongoose.models.farmData || mongoose.model("farmData", farmDataSchema);