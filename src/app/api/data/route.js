import mongoose from "mongoose";
import { NextResponse } from "next/server";
const farmdata = require("@/app/api/model/farmData")

async function connectToDatabase() {
    await mongoose.connect("mongodb+srv://inventory_user1:CknB8IRcsIUptTZn@cluster0.s2kre.mongodb.net/poultryFarm");
}

export async function POST(request) {
    const receivedData = await request.json();
    connectToDatabase().then(() => console.log("db connected"));
    console.log(receivedData);
    console.log(receivedData.incubatorTemp);
    console.log(receivedData.incubatorHumi);

    if (request.method == "POST") {
        try {
            //   const vehicleInfo = new mongoose.models.vehicles(data);
            const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                { farmID: "123abc456" }, // Find the vehicle by reg_number
                { incubatorTemp: receivedData.incubatorTemp, incubatorHumi: receivedData.incubatorHumi },  // Update the lat and long            
                { new: true }                                  // Return the updated document
            );

            //   await vehicleInfo.save().then(() => console.log("vehicleInfo saved"), () => console.log("vehicleInfo save failed"));
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