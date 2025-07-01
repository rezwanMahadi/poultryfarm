import mongoose from "mongoose";
import { NextResponse } from "next/server";
const farmdata = require("@/app/api/model/farmData")
const farmDataRecord = require("@/app/api/model/farmDataRecord")

async function connectToDatabase() {
    await mongoose.connect("mongodb+srv://inventory_user1:CknB8IRcsIUptTZn@cluster0.s2kre.mongodb.net/poultryFarm");
}

export async function POST(request) {
    const receivedData = await request.json();
    connectToDatabase().then(() => console.log("db connected"));
    console.log(receivedData);
    console.log(receivedData.incubatorTemp);
    console.log(receivedData.incubatorHumi);
    
    let time = new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }) + " GMT+6";
    let receivedDataWithTime = {
        incubatorTemp: receivedData.incubatorTemp,
        incubatorHumi: receivedData.incubatorHumi,
        brooderTemp: receivedData.brooderTemp,
        brooderHumi: receivedData.brooderHumi,
        bigChickTemp: receivedData.bigChickTemp,
        time: String(time)
    };

    if (request.method == "POST") {
        try {
            // const data = new mongoose.models.farmData(receivedData);
            const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                { farmID: "123abc456" }, // Find the farm by id
                {
                    incubatorTemp: receivedData.incubatorTemp,
                    incubatorHumi: receivedData.incubatorHumi,
                    brooderTemp: receivedData.brooderTemp,
                    brooderHumi: receivedData.brooderHumi,
                    bigChickTemp: receivedData.bigChickTemp,
                },        
                { new: true }                                  // Return the updated document
            );

            const recordData = new mongoose.models.farmDataRecord(receivedDataWithTime);
            await recordData.save().then(() => console.log("recordData saved"), () => console.log("recordData save failed"));

            // await data.save().then(() => console.log("data saved"), () => console.log("data save failed"));
            // console.log(data);
            console.log(updatedData);
            return NextResponse.json({ success: true, Response: 'data updated' });
        }
        catch (error) {
            console.log(error);
            return NextResponse.json({ message: 'Internal Server Error', error });
        }
    }
    else {
        return NextResponse.json({ "success": false, "error": "Request type error." });
    }
}