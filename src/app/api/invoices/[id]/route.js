import { NextResponse} from "next/server";
import prisma from "@prisma/client";


export async function GET() {
  return NextResponse.json('holis sola ruta de invoice por id');
}


export async function POST(request) {
    const {title, description} = await request.json()
    const newClient = await prisma.task.create({data:{
        title, description
    }})
  return NextResponse.json(newClient);
}

