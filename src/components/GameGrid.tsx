import { SimpleGrid, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardComtainer from "./GameCardComtainer";
import GameCardSkeleton from "./GameCardSkeleton";


const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length,
      0
    ) || 0;

  return (
      <InfiniteScroll
      dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardComtainer key={skel}>
              {" "}
              <GameCardSkeleton />
            </GameCardComtainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardComtainer key={game.id}>
                <GameCard game={game}></GameCard>
              </GameCardComtainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      </InfiniteScroll>
      // {/* {hasNextPage && (
      //   <Button onClick={() => fetchNextPage()} marginY={5}>
      //     {isFetchingNextPage ? "Loading..." : "LoadMore"}
      //   </Button>
      // )} */}
  );
};

export default GameGrid;
