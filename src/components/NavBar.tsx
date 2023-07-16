
import { Image } from "@chakra-ui/image";
import { HStack, Text } from "@chakra-ui/layout";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
  }
  
  const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='10px'>
      <Image src={logo} boxSize="60px"/>
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
