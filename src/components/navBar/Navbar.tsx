import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/LogoHorizontal.png";

export default function NavBar() {
  return (
    <HStack
      position="fixed"
      left={0}
      w="full"
      zIndex={100}
      h={"55px"}
      paddingX={{ base: "16px", sm: "40px" }}
      paddingY="8px"
      overflow="hidden"
      bgColor="#FFC832"
    >
      <Image alt="Logo" src={logo} width={{ base: "150px", sm: "230px" }} />
    </HStack>
  );
}
