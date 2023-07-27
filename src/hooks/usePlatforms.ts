import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";
import ms from "ms";
import { Platforms } from "../Entities/Platforms";

const apiClient = new APIClient<Platforms>('/platforms/lists/parents');
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
