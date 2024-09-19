import { useState, useLayoutEffect, useRef } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IPost } from "../../../../domain/interfaces/IPost";

type PostCardProps = {
  post: IPost;
  onClickReadMore: () => void;
};

export default function PostCard({ post, onClickReadMore }: PostCardProps) {
  const textContainerRef = useRef<HTMLParagraphElement | null>(null);
  const [isTextTruncated, setIsTextTruncated] = useState(false);

  useLayoutEffect(() => {
    const checkIfTruncated = () => {
      if (textContainerRef.current) {
        const container = textContainerRef.current;
        setIsTextTruncated(container.scrollHeight > container.clientHeight);
      }
    };

    checkIfTruncated();

    window.addEventListener("resize", checkIfTruncated);
    return () => window.removeEventListener("resize", checkIfTruncated);
  }, [post]);

  const formattedDate = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(post.date);

  return (
    <Card overflow="hidden" variant="elevated" mb="4" maxW="4xl" w={"100%"}>
      <Stack>
        <CardBody>
          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            mb="4"
          >
            <Stack direction="row" align="center">
              <Avatar size="xs" />

              <Text fontSize="md">{post.author}</Text>
            </Stack>

            <Text
              flex={1}
              textAlign={{ base: "left", md: "right" }}
              fontSize={{ base: "sm", md: "md" }}
              color="gray.500"
            >
              {formattedDate}
            </Text>
          </Stack>

          <Heading size="md" color="gray.700" mb="2">
            {post.title}
          </Heading>

          <Text ref={textContainerRef} color="gray.700" noOfLines={3}>
            {post.description}
          </Text>
        </CardBody>

        <CardFooter>
          {isTextTruncated && (
            <Button
              variant="solid"
              colorScheme="blue"
              bgColor="orange.400"
              _hover={{ bgColor: "orange.300" }}
              onClick={onClickReadMore}
            >
              Ler mais
            </Button>
          )}
        </CardFooter>
      </Stack>
    </Card>
  );
}
