import type { NextPage } from "next";
import type { Cloud } from "@prisma/client";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import axios from "axios";

const Cloud: NextPage = () => {
  const router = useRouter();
  const name = router.query.name as string;

  const {
    data: cloud,
    isLoading,
    isError,
    isIdle,
  } = useQuery<Cloud>(
    ["cloud", { name }],
    () => axios.get<Cloud>(`/api/clouds/${name}`).then((res) => res.data),
    { enabled: !!name }
  );

  if (isLoading || isIdle) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return <div>{JSON.stringify(cloud, null, 2)}</div>;
};

export default Cloud;
