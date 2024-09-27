import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navBar/Navbar";

export default function BaseScreenTemplate() {
  return (
    <Flex flex={1} gap={0} direction="column">
      <NavBar />
      <Outlet />
      <Footer />
    </Flex>
  );
}
