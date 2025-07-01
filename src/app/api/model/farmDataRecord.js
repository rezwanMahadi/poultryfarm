const mongoose = require("mongoose");


const farmDataRecordSchema = new mongoose.Schema({
    incubatorTemp: String,
    incubatorHumi: String,
    brooderTemp: String,
    brooderHumi: String,
    bigChickTemp: String,
    time: String
});

module.exports = mongoose.models.farmDataRecord || mongoose.model("farmDataRecord", farmDataRecordSchema);