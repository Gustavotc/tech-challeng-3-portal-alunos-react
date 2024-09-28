import { Text, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import FormButtonsRow from "./components/formButtonsRow/FormButtonsRow";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCreatePost } from "../../domain/usecases/useCreatePost";
import { useEffect, useState } from "react";
import { ICreatePost } from "../../domain/interfaces/IPost";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { useFetchPostById } from "../../domain/usecases/useFetchPostById";
import { useEditPost } from "../../domain/usecases/useEditPost";

export const CreatePost = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const isEditing = searchParams.get("id") !== undefined;

  const toast = useToast();

  const { user } = useAuthContext();

  const { createPost } = useCreatePost();
  const { fetchPostById } = useFetchPostById();
  const { editPost } = useEditPost();

  const handleSave = async () => {
    if (!user) return;

    const post: ICreatePost = {
      title: title,
      description: description,
      category: category,
      userId: user.id,
    };

    try {
      setLoading(true);

      if (!isEditing) {
        await createPost(post);
      } else {
        const editingPostId = searchParams.get("id");
        if (!editingPostId) return;
        await editPost({
          title,
          description,
          category,
          user_id: user.id,
          post_id: editingPostId,
        });
      }

      const feedbackTitle = isEditing ? "Post Editado" : "Post Criado!";
      const feedbackMessage = isEditing
        ? "A postagem foi editada com sucesso."
        : "A postagem foi criada com sucesso.";

      toast({
        title: feedbackTitle,
        description: feedbackMessage,
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
      navigate("/posts/admin");
    } catch {
      toast({
        title: "Erro!",
        description: "Erro ao criar postagem",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate("/posts/admin");
  };

  const fetchPostInfo = async (id: string) => {
    try {
      const response = await fetchPostById(id);
      setTitle(response.title);
      setDescription(response.description);
      setCategory(response.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const postId = searchParams.get("id");

    if (!postId) return;

    fetchPostInfo(postId);
  }, []);

  return (
    <VStack flex={1} w="full">
      <VStack
        flex={1}
        marginTop="80px"
        paddingLeft={{ base: "8", md: "24" }}
        paddingBottom="41px"
        align="flex-start"
        w="full"
      >
        <Text fontWeight="medium" fontSize={{ base: "xl", md: "3xl" }}>
          {isEditing ? "EDITAR POST" : "CRIAR POST"}
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
            placeholder="Informe o título do post"
            variant="filled"
            borderRadius="4x"
            mb={4}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Text fontWeight="regular" fontSize="lg" color="gray.500">
            Descrição
          </Text>

          <Textarea
            variant="filled"
            resize="none"
            placeholder="Comente os detalhes do seu post..."
            mb={4}
            value={description}
            size="md"
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            overflow="hidden"
          />

          <Text fontSize="lg" color="gray.500">
            Categoria
          </Text>

          <Input
            variant="filled"
            placeholder="Informe a categoria"
            borderRadius="4px"
            mb={8}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <FormButtonsRow
            loading={loading}
            handleSave={handleSave}
            handleGoBack={handleGoBack}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};
