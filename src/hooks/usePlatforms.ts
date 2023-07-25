import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";

const apiClient = new APIClient<Platforms>('/platforms/lists/parents');
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"], // Corrected the typo here
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, // 24 hours
    staleTime:ms('24h'),
    initialData: platforms,
  });


// useData<Platforms>('/platforms/lists/parents');

export default usePlatforms;
