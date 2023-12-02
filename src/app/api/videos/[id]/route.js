import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";


// Get a video by ID received by params
export async function GET(request, { params }) {
  try {
   
    const video = await prisma.video.findUnique({
      where: {
        id: params.id,
      },
    });
    if (video === null) {
      return NextResponse.json(
        { message: "No existe video con este ID" },
        { status: 404 }
      );
    }
    return NextResponse.json(video);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


// Update a video with new data received by request
export async function PUT(request, { params }) {
  const data = await request.json();
  try {
    const video = await prisma.video.update({
      where: {
        id: params.id,
      },
      data,
    });

    if (!video) {
      return NextResponse.json(
        { message: "No existe video con este ID" },
        { status: 404 }
      );
    }
    return NextResponse.json(video);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


// Mark a video as important or not important
export async function PATCH(request, { params }) {
  console.log('sdfsd')
  try {
    // Getting current video by id
    const currentVideo = await prisma.video.findUnique({
      where: {
        id: params.id,
      },
    });

    if (!currentVideo) {
      return NextResponse.json(
        { message: "No existe video con este ID" },
        { status: 404 }
      );
    }

    //Update the video with the opposite value of 'important'.
    const updatedVideo = await prisma.video.update({
      where: {
        id: params.id,
      },
      data:{
        important: !currentVideo.important
      },
    });

    return NextResponse.json(updatedVideo);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


// Delete a video by ID received by params
export async function DELETE(request, { params }) {
  try {
    const video = await prisma.video.delete({
      where: {
        id: params.id,
      },
    });
    if (video === null) {
      return NextResponse.json(
        { message: "No existe video con este ID" },
        { status: 404 }
      );
    }
    return NextResponse.json({message: `Video "${video.title}" eliminado satisfactoriamente` });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
