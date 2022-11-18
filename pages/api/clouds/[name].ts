import type { NextApiRequest, NextApiResponse } from "next";
import type { Cloud } from "@prisma/client";
import { prisma } from "../../../config";

const get_cloud = async (
  req: NextApiRequest,
  res: NextApiResponse<Cloud | { message: string }>
) => {
  const name = req.query.name as string;
  const cloud = await prisma.cloud.findUnique({ where: { name } });

  if (!cloud) {
    return res
      .status(404)
      .json({ message: `Cloud with name ${name} not found` });
  }

  res.status(200).json(cloud);
};

export default get_cloud;
