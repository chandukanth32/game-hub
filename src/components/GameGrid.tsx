import { SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import useGames from "../hooks/useGames";
import GameCard from "./Gamecard";
import GameCardComtainer from "./GameCardComtainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={10}
      >
        {isLoading && skeletons.map(skel => <GameCardComtainer> <GameCardSkeleton key={skel}/></GameCardComtainer>)}
        {games.map((game) => (
          <GameCardComtainer><GameCard key={game.id} game={game}></GameCard></GameCardComtainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
