import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { IPost } from "../../../../domain/interfaces/IPost";

type PostCardProps = {
  post: IPost;
  onClickReadMore: () => void;
};

export default function PostCard({ post, onClickReadMore }: PostCardProps) {
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
            <HStack align="center">
              <Avatar size="xs" />

              <Text fontSize="md" color="gray.700">
                {post.author}
              </Text>
            </HStack>

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

          <Text color="gray.700" noOfLines={3}>
            {post.description}
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            bgColor="orange.400"
            _hover={{ bgColor: "orange.300" }}
            onClick={onClickReadMore}
          >
            Ler mais
          </Button>
          <Tag marginLeft="auto">{post.category}</Tag>
        </CardFooter>
      </Stack>
    </Card>
  );
}
