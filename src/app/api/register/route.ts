import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const { email, name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("Hashed Password:", hashedPassword);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
    console.log("Created User:", user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
