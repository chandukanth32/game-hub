
import { Image } from "@chakra-ui/image";
import { HStack, Text } from "@chakra-ui/layout";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./colorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize="60px"/>
      <ColorModeSwitch/>
    </HStack>
  );
};

export default NavBar;
