import { NextResponse} from "next/server";
import prisma from "@/app/libs/prisma";


// Get information about clients with their invoices from the database.
export async function GET() {
  
  const data = await prisma.client.findMany({
    include: {
      invoices: true,
    },
  });
  return NextResponse.json(data);
}

// Creates a new client in the database.
export async function POST(request) {
  const {name, email, image} = await request.json()
  const newClient = await prisma.client.create({data:{
    name, email, image
  }})
return NextResponse.json(newClient);
}
