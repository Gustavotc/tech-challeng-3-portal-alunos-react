import { Flex, Heading, Spinner } from "@chakra-ui/react";
import PostCard from "./components/postCard/PostCard";
import { useFeed } from "./useFeed";
import EmptyPostsList from "./components/emptyPostsList/EmptyPostsList";

export default function Feed() {
  const controller = useFeed();

  return (
    <Flex direction="column" p="10" justify="center" align="center">
      <Heading size="lg" mb="8" color="gray.700">
        Últimas postagens
      </Heading>

      {controller.loading && <Spinner />}

      {!controller.posts.length && <EmptyPostsList />}

      {controller.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClickReadMore={() => controller.handleReadMoreClick(post)}
        />
      ))}
    </Flex>
  );
}
