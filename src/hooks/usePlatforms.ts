import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: platforms,
  });


// useData<Platforms>('/platforms/lists/parents');

export default usePlatforms;
