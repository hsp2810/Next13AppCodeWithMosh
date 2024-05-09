import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const { password, newPassword } = await req.json();

    const session = await getServerSession(authOptions);

    if (!session) return null;

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email as string },
    });

    const isCorrectPassword = await bcrypt.compare(
      password,
      user?.hashedPassword as string
    );

    if (!isCorrectPassword)
      return NextResponse.json({ message: "Password is incorrect" });

    await prisma.user.update({
      where: {
        email: user?.email as string,
      },
      data: {
        hashedPassword: await bcrypt.hash(newPassword, 10),
      },
    });

    return NextResponse.json({ message: "Password Updated" });
  } catch (error) {
    console.log(error);
  }
}
