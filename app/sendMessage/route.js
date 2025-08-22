import { NextResponse } from "next/server";
import connectDB from "../lib/connectDB";
import Message from "../models/Message";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, message, captcha } = body;
    if (!name || !message || !captcha) {
      return NextResponse.json(
        { success: false, message: "Please fill all the fields and complete captcha" },
        { status: 400 }
      );
    }
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.SECRECT_KEY}&response=${captcha}`,
    });
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, message: "Captcha verification failed", verifyData },
        { status: 400 }
      );
    }
    await connectDB();
    const userMessage = await Message.create({ name, message });

    return NextResponse.json(
      { success: true, message: "Message sent successfully", userMessage },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in sendMessage API:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const data = await Message.find({});
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 })
  }
}