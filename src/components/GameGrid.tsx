import { SimpleGrid, Text } from "@chakra-ui/layout";
import useGames, {  Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./Gamecard";
import GameCardComtainer from "./GameCardComtainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props{
    selectedGenre: Genre | null;
    selectedPlatform:Platform | null;
}

const GameGrid = ({selectedGenre,selectedPlatform}:Props) => {
  const { data, error, isLoading } = useGames(selectedGenre,selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding="10px"
        spacing={3}
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
