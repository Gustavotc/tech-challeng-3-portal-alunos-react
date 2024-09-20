import { Text, Input, Textarea, VStack } from "@chakra-ui/react";
import NavBar from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import FormButtonsRow from "./components/formButtonsRow/FormButtonsRow";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Salvar");
  };

  const handleDelete = () => {
    console.log("Deletar");
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <VStack>
      <NavBar />

      <VStack
        marginTop="80px"
        paddingLeft={{ base: "8", md: "24" }}
        paddingBottom="41px"
        align="flex-start"
        w="full"
      >
        <Text fontWeight="medium" fontSize={{ base: "xl", md: "3xl" }}>
          CRIAR POST
        </Text>

        <VStack
          paddingX="24px"
          paddingY="32px"
          borderRadius="8px"
          boxShadow="md"
          alignItems="flex-start"
          borderWidth={1}
          w={{ base: "90%", xl: "60%" }}
        >
          <Text fontSize="lg" color="gray.500">
            Título
          </Text>

          <Input
            placeholder="Javascript está vai continuar em alta?"
            variant="filled"
            borderRadius="4x"
            mb={4}
          />

          <Text fontWeight="regular" fontSize="lg" color="gray.500">
            Descrição
          </Text>

          <Textarea
            variant="filled"
            resize="none"
            placeholder="Comente os detalhes do seu post..."
            mb={4}
          />

          <Text fontSize="lg" color="gray.500">
            Categoria
          </Text>

          <Input
            variant="filled"
            placeholder="Informe a categoria"
            borderRadius="4px"
            mb={8}
          />

          <FormButtonsRow
            handleSave={handleSave}
            handleDelete={handleDelete}
            handleGoBack={handleGoBack}
          />
        </VStack>
      </VStack>

      <Footer />
    </VStack>
  );
};
