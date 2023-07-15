import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/platformSelector";
import PlatfromiconList from "./components/PlatfromiconList";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setselectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform,setselectedPlatform]=useState<Platform|null>(null);
  return (
    <Grid templateAreas={{
      base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}

    >
      <GridItem area="nav" >
        <NavBar/>
      </GridItem>
      <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setselectedGenre(genre)}/>
      </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setselectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}

export default App;
