import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB";
import Message from "../models/Message";

export async function POST(req) {
    const body = await req.json();
    if (body.postType === "passCheck") {
        if (body.password === "iLoveDORAEMON") {
            return NextResponse.json({ message: "Auth sucessfull" })
        } else {
            return NextResponse.json({ message: "Auth Failed" })
        }
    }
    if (body.postType === "modMessage") {
        try {
            await connectDB();
            const deleted = await Message.findByIdAndDelete(body.id);
            return NextResponse.json({ status: "Deleted", deleted });

        } catch (error) {
            return NextResponse.json({ error })
        }
    }
}