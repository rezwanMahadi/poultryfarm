import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
const farmData = require("@/app/api/model/farmData")

async function connectToDatabase() {
    await mongoose.connect("mongodb+srv://inventory_user1:CknB8IRcsIUptTZn@cluster0.s2kre.mongodb.net/poultryFarm");
  }

export async function POST(request) {
    try {
        connectToDatabase().then(() => console.log("db connected"));

        const found_data = await mongoose.models.farmData.findOne({ farmID: "123abc456" });
        console.log('Query result:', found_data);

        if (found_data) {
            return NextResponse.json({
                success:true,
                incubatorTemp: found_data.incubatorTemp,
                incubatorHumi: found_data.incubatorHumi,
                brooderTemp: found_data.brooderTemp,
                brooderHumi: found_data.brooderHumi,
                bigChickTemp: found_data.bigChickTemp,
                incubatorTempUpLimit: found_data.incubatorTempUpLimit,
                incubatorTempDownLimit: found_data.incubatorTempDownLimit,
                incubatorHumiUpLimit: found_data.incubatorHumiUpLimit,
                incubatorHumiDownLimit: found_data.incubatorHumiDownLimit,
                brooderTempUpLimit: found_data.brooderTempUpLimit,
                brooderTempDownLimit: found_data.brooderTempDownLimit,
                brooderHumiUpLimit: found_data.brooderHumiUpLimit,
                brooderHumiDownLimit: found_data.brooderHumiDownLimit,
                bigChickTempUpLimit: found_data.bigChickTempUpLimit,
                bigChickTempDownLimit: found_data.bigChickTempDownLimit
            });
        } else {
            return NextResponse.json({ success:false, msg: "data not found" });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal Server Error', error });
    }
}