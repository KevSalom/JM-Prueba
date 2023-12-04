import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";

//Route for get all videos
export async function GET() {
  try {
    const data = await prisma.video.findMany({
      orderBy: {
        date: 'desc'
      }
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

//Route for Create a video in the database.
export async function POST(request) {
  try {
    const { title, description, url, thumbnail } = await request.json();
    const newClient = await prisma.video.create({
      data: {
        title,
        description,
        url,
        thumbnail
      },
    });
    return NextResponse.json(newClient);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
