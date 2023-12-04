import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";


//Handles a POST request to add several videos to the database.
export async function POST(request) {
  try {
    const videos = await request.json();
    const newVideos = await prisma.video.createMany({
      data: videos,
    });

    return NextResponse.json(newVideos);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}