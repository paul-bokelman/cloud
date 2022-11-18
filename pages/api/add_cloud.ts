import type { NextApiRequest, NextApiResponse } from "next";
import type { Cloud } from "@prisma/client";
import { prisma } from "../../config";

const add_cloud = async (req: NextApiRequest, res: NextApiResponse<Cloud>) => {
  const data = req.body as Omit<Cloud, "id" | "createdAt" | "updatedAt">;
  const cloud = await prisma.cloud.create({ data });

  return res.status(200).json(cloud);
};

export default add_cloud;
