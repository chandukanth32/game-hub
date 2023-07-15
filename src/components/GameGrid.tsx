import { SimpleGrid, Text } from "@chakra-ui/layout";
import useGames from "../hooks/useGames";
import GameCard from "./Gamecard";
import GameCardComtainer from "./GameCardComtainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={10}
      >
        {isLoading && skeletons.map(skel => <GameCardComtainer key={skel}> <GameCardSkeleton key={skel}/></GameCardComtainer>)}
        {data.map((game) => (
          <GameCardComtainer key={game.id}><GameCard key={game.id} game={game}></GameCard></GameCardComtainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
