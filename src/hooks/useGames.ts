//custom hook for fetching games

import { useInfiniteQuery } from "@tanstack/react-query";
// import { FetchResponse } from "./useData";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import  Game  from "../Entities/Game";

const apiClient = new APIClient<Game>('/games');
const useGames = () =>{
  const gameQuery = useGameQueryStore(s=>s.gameQuery)
 return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({pageParam = 1 }) => {
      return apiClient
        .getAll({
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam
          }
        })
    },
    // allPages contains data of each page we receive
    getNextPageParam:(lastPage,allPages)=>{
      return lastPage.next? allPages.length + 1:undefined;
    },
    // staleTime:24*60*60*1000 //24hrs
    staleTime:ms('24h'),
  });
}
  

export default useGames;
