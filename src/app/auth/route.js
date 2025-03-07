import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
const users = require("@/app/api/model/users")

async function connectToDatabase() {
    await mongoose.connect("mongodb+srv://inventory_user1:CknB8IRcsIUptTZn@cluster0.s2kre.mongodb.net/poultryFarm");
}

export async function POST(request) {
    const data = await request.json();
    console.log("received data: ",data);
    if (request.method == "POST") {
        try {
            connectToDatabase().then(() => console.log("db connected"));
            console.log(data.email);

            // const founddata = new mongoose.models.userData(data);
            // await founddata.save().then(() => console.log("recordData saved"), () => console.log("recordData save failed"));
            // return NextResponse.json({ success: true, founddata });

            const found_user = await mongoose.models.userData.findOne({ email: data.email});//.then(()=> console.log("db hitted"), ()=> console.log("db not hitted"));
            console.log('Query result:', found_user);

            if (found_user != null && found_user.email == data.email && found_user.pass == data.pass) {
                const user_info = {
                    farmID: found_user.farmID,
                    email: found_user.email
                  };
                return NextResponse.json({ success: true, user_info });
            } else {
                return NextResponse.json({ success: false, msg: "Wrong email or password!" });
            }
        } catch (error) {
            console.log(error);
            return NextResponse.json({ message: 'Internal Server Error', error });
        }
    }
    else{
        return NextResponse.json({ success: false, error: "Request type error." });
    }
}