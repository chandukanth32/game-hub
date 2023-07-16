import { SimpleGrid, Text } from "@chakra-ui/layout";
import React from "react";
import { GameQuery } from "../App";
import useGames, {  Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardComtainer from "./GameCardComtainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props{
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skel) => (
            <GameCardComtainer key={skel}>
              {" "}
              <GameCardSkeleton/>
            </GameCardComtainer>
          ))}
        {data.map((game) => (
          <GameCardComtainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardComtainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
