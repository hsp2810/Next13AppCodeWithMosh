import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(req: NextRequest) {
  const users = await prisma.user.findMany();
  return NextResponse.json({ message: "Fetch all the users", users });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 404 });
  }

  const { email, name, password } = body;

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });

  return NextResponse.json({ message: "User created successfully", user });
}
