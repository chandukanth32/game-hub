import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Genre } from "../Entities/Genre";

const apiClient = new APIClient<Genre>("/genres");
// this is done using static code
const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000, //24 hours
    staleTime:ms('24h'),
    initialData: genres,
  });

export default useGenres;
