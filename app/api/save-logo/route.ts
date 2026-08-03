import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }
    
    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    const filePath = path.join(process.cwd(), "public", "images", "white-back.png");
    
    fs.writeFileSync(filePath, base64Data, "base64");
    console.log("Saved white-back.png successfully to path:", filePath);
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error saving logo:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
