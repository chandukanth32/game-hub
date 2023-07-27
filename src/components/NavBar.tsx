
import { Image } from "@chakra-ui/image";
import { HStack, Text } from "@chakra-ui/layout";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
  
  const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
      <Image src={logo} boxSize="60px" objectFit='cover'/>
      </Link>
      <SearchInput />
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
