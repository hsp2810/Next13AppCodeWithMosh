import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(req: NextRequest, { params: { id } }: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }
  return NextResponse.json({ message: "User Found", user });
}

export async function PUT(req: NextRequest, { params: { id } }: Props) {
  const body = await req.json();

  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      name: body.name,
    },
  });

  return NextResponse.json({ message: "User Updated", updatedUser });
}
