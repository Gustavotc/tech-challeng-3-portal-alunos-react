import { Text, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import NavBar from "../components/navBar/Navbar";
import Footer from "../components/footer/Footer";
import FormButtonsRow from "./components/formButtonsRow/FormButtonsRow";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../../domain/usecases/useCreatePost";
import { useState } from "react";
import { ICreatePost } from "../../domain/interfaces/IPost";

export const CreatePost = () => {
  const navigate = useNavigate();
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const userId = "8fb9e777-8372-4dc9-82e5-ef1aaec57800";

  const { createPost } = useCreatePost();

  const handleSave = async () => {
    const post: ICreatePost = {
      title: tittle,
      description: description,
      category: category,
      userId: userId
    }

    try {
      setLoading(true);
      await createPost(post);
      toast({
        title: "Post Criado!",
        description: "A postagem foi criada com sucesso.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      navigate("/post/admin");

    } catch (e) {
      toast({
        title: "Erro!",
        description: "Erro ao criar postagem",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      console.log("Error on create post: " + e)
    } finally {
      setLoading(false);
    }

  };


  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <VStack flex={1}>
      <NavBar />

      <VStack
        flex={1}
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
            onChange={e => setTittle(e.target.value)}
          />

          <Text fontWeight="regular" fontSize="lg" color="gray.500">
            Descrição
          </Text>

          <Textarea
            variant="filled"
            resize="none"
            placeholder="Comente os detalhes do seu post..."
            mb={4}
            onChange={e => setDescription(e.target.value)}
          />

          <Text fontSize="lg" color="gray.500">
            Categoria
          </Text>

          <Input
            variant="filled"
            placeholder="Informe a categoria"
            borderRadius="4px"
            mb={8}
            onChange={e => setCategory(e.target.value)}
          />

          <FormButtonsRow
            loading={loading}
            handleSave={handleSave}
            handleGoBack={handleGoBack}
          />
        </VStack>
      </VStack>

      <Footer />
    </VStack>
  );
};
