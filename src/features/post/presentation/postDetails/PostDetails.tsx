import { Button, HStack, Tag, Text, VStack } from "@chakra-ui/react";
import Page from "../../../../components/page/Page";
import { useEffect, useState } from "react";
import { IPost } from "../../domain/interfaces/IPost";
import { useFetchPostById } from "../../domain/usecases/useFetchPostById";
import { useLocation, useNavigate } from "react-router-dom";

export default function PostDetails() {
  const navigate = useNavigate();

  const [post, setPost] = useState<IPost | null>(null);
  const { state: routeState } = useLocation();

  const { fetchPostById } = useFetchPostById();

  const fetchPostData = async () => {
    const postId = routeState.id;

    const response = await fetchPostById(postId);
    console.log(response);
    setPost(response);
  };

  const handleGoBack = () => {
    navigate("/posts");
  };

  const formattedDate = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(post?.date);

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <Page>
      <VStack
        bgColor="gray.100"
        p={8}
        pt={4}
        borderRadius={8}
        w={{ base: "100%", lg: "40%" }}
      >
        <Text fontSize="md" mb={4} alignSelf="flex-start" color="gray.500">
          {`Autor: ${post?.author}`}
        </Text>
        <HStack mb={8} alignItems="baseline" maxW="500px">
          <Tag colorScheme="orange" size="lg">
            {post?.category}
          </Tag>
          <Text flex={1} fontSize="2xl" ml={2} fontWeight="bold">
            {post?.title}
          </Text>
        </HStack>

        <Text padding={2} borderRadius={8} mb={8} width="full">
          {post?.description}
        </Text>

        <HStack width="full" justifyContent="space-between" align="center">
          <Button
            colorScheme="orange"
            onClick={handleGoBack}
            alignSelf="flex-start"
          >
            Voltar
          </Button>

          <Text color="gray.500">{formattedDate}</Text>
        </HStack>
      </VStack>
    </Page>
  );
}
