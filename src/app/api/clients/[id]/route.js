import { NextResponse } from "next/server";
import prisma from "@/app/libs/prisma";


// Get a client by ID received by params
export async function GET(request, { params }) {
  try {
   
    const client = await prisma.client.findUnique({
      where: {
        clientId: params.id,
      },
    });
    if (client === null) {
      return NextResponse.json(
        { message: "No existe cliente con este ID" },
        { status: 404 }
      );
    }
    return NextResponse.json(client);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


// Update a client with new data received by request
export async function PUT(request, { params }) {
  const data = await request.json();
  try {
    const client = await prisma.client.update({
      where: {
        clientId: params.id,
      },
      data,
    });

    if (!client) {
      return NextResponse.json(
        { message: "No existe cliente con este ID" },
        { status: 404 }
      );
    }
    return NextResponse.json(client);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
