import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validation = schema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors);
    }

    const { email, name, password } = body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (user)
      return NextResponse.json(
        { message: "Email already taken" },
        { status: 401 }
      );

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: { email, name, hashedPassword },
    });

    return NextResponse.json({ message: "User Created", email: newUser.email });
  } catch (error) {
    console.log(error);
  }
}
