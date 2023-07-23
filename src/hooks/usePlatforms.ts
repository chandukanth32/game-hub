import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import platforms from "../data/platforms";

interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platfroms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platforms>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: {count:platforms.length,results:platforms},
  });

// useData<Platforms>('/platforms/lists/parents');

export default usePlatforms;
