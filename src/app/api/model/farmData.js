const mongoose = require("mongoose");

const farmDataSchema = new mongoose.Schema({
    farmID: String,
    incubatorTemp: String,
    incubatorHumi: String,
    brooderTemp: String,
    brooderHumi: String,
    bigChickTemp: String,
    incubatorTempUpLimit: String,
    incubatorTempDownLimit: String,
    incubatorHumiUpLimit: String,
    incubatorHumiDownLimit: String,
    brooderTempUpLimit: String,
    brooderTempDownLimit: String,
    brooderHumiUpLimit: String,
    brooderHumiDownLimit: String,
    bigChickTempUpLimit: String,
    bigChickTempDownLimit: String
});

module.exports = mongoose.models.farmData || mongoose.model("farmData", farmDataSchema);