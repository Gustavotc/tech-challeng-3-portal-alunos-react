import { Flex } from "@chakra-ui/react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Flex w="100vw" h="100vh">
      <AppRoutes />
    </Flex>
  );
}

export default App;
