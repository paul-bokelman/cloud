import { PrismaClient } from "@prisma/client";

interface Global {
  prisma: PrismaClient;
}

export const prisma =
  (global as unknown as Global).prisma || (new PrismaClient() as PrismaClient);
