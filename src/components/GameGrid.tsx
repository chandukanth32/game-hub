import { SimpleGrid, Text } from "@chakra-ui/layout";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardComtainer from "./GameCardComtainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import { Box, Button } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  return (
    <Box padding="10px" >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        
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
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "LoadMore"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
