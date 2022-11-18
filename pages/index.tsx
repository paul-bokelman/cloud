import type { NextPage } from "next";
import type { Cloud } from "@prisma/client";
import { useQuery } from "react-query";
import axios from "axios";

const Clouds: NextPage = () => {
  const {
    data: clouds,
    isLoading,
    isError,
    isIdle,
  } = useQuery<Cloud[]>("clouds", () =>
    axios.get<Cloud[]>("/api/clouds").then((res) => res.data)
  );

  if (isLoading || isIdle) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      {clouds.length === 0 ? (
        <div>No clouds</div>
      ) : (
        clouds.map((cloud) => <>{JSON.stringify(cloud, null, 2)}</>)
      )}
    </div>
  );
};

export default Clouds;
