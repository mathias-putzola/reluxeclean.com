// app/api/availabilities/route.ts

import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // ... (comme ci-dessus)
}

export async function POST(request: Request) {
  try {
    const { availabilities } = await request.json();

    const now = new Date();
    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(now.getDate() + 14);

    // Supprimer les disponibilités existantes sur les deux prochaines semaines
    await prisma.availability.deleteMany({
      where: {
        date: {
          gte: now,
          lt: twoWeeksLater,
        },
      },
    });

    // Créer les nouvelles disponibilités
    const formattedAvailabilities = availabilities.map((a: Availability) => ({
      date: new Date(a.date),
      timeSlot: a.timeSlot,
      available: a.available,
    }));

    await prisma.availability.createMany({
      data: formattedAvailabilities,
    });

    return NextResponse.json({ message: "Disponibilités mises à jour" });
  } catch (error) {
    console.error("Erreur lors de la mise à jour des disponibilités:", error);
    return NextResponse.json({ message: "Erreur serveur" }, { status: 500 });
  }
}

interface Availability {
  id?: number;
  date: string;
  timeSlot: number;
  available: boolean;
}