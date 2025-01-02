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
            if (receivedData.sectionName === "IncubatorTemp") {
                const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                    { farmID: "123abc456" }, // Find the farm by id
                    {
                        incubatorTempUpLimit: receivedData.incubatorTempUpLimit,
                        incubatorTempDownLimit: receivedData.incubatorTempDownLimit,
                    },  // Update the data            
                    { new: true }                                  // Return the updated document
                );
                console.log(updatedData);
                return NextResponse.json({ success: true, Response: 'data updated' });
            }
            else if (receivedData.sectionName === "IncubatorHumi") {
                const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                    { farmID: "123abc456" }, // Find the farm by id
                    {
                        incubatorHumiUpLimit: receivedData.incubatorHumiUpLimit,
                        incubatorHumiDownLimit: receivedData.incubatorHumiDownLimit,
                    },  // Update the data            
                    { new: true }                                  // Return the updated document
                );
                console.log(updatedData);
                return NextResponse.json({ success: true, Response: 'data updated' });
            }
            else if (receivedData.sectionName === "BrooderTemp") {
                const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                    { farmID: "123abc456" }, // Find the farm by id
                    {
                        brooderTempUpLimit: receivedData.brooderTempUpLimit,
                        brooderTempDownLimit: receivedData.brooderTempDownLimit,
                    },  // Update the data            
                    { new: true }                                  // Return the updated document
                );
                console.log(updatedData);
                return NextResponse.json({ success: true, Response: 'data updated' });
            }
            else if (receivedData.sectionName === "BrooderHumi") {
                const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                    { farmID: "123abc456" }, // Find the farm by id
                    {
                        brooderHumiUpLimit: receivedData.brooderHumiUpLimit,
                        brooderHumiDownLimit: receivedData.brooderHumiDownLimit,
                    },  // Update the data            
                    { new: true }                                  // Return the updated document
                );
                console.log(updatedData);
                return NextResponse.json({ success: true, Response: 'data updated' });
            }
            else if (receivedData.sectionName === "BrooderHumi") {
                const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                    { farmID: "123abc456" }, // Find the farm by id
                    {
                        brooderHumiUpLimit: receivedData.brooderHumiUpLimit,
                        brooderHumiDownLimit: receivedData.brooderHumiDownLimit,
                    },  // Update the data            
                    { new: true }                                  // Return the updated document
                );
                console.log(updatedData);
                return NextResponse.json({ success: true, Response: 'data updated' });
            }
            else if (receivedData.sectionName === "MatureTemp") {
                const updatedData = await mongoose.models.farmData.findOneAndUpdate(
                    { farmID: "123abc456" }, // Find the farm by id
                    {
                        bigChickTempUpLimit: receivedData.bigChickTempUpLimit,
                        bigChickTempDownLimit: receivedData.bigChickTempDownLimit,
                    },  // Update the data            
                    { new: true }                                  // Return the updated document
                );
                console.log(updatedData);
                return NextResponse.json({ success: true, Response: 'data updated' });
            }
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