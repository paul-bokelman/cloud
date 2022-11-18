import type { NextApiRequest, NextApiResponse } from "next";
import type { Cloud } from "@prisma/client";
import { prisma } from "../../config";

const get_clouds = async (
  req: NextApiRequest,
  res: NextApiResponse<Cloud[]>
) => {
  const clouds = await prisma.cloud.findMany();

  res.status(200).json(clouds);
};

export default get_clouds;
