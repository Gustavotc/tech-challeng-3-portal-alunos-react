import { Flex, Heading, Spinner } from "@chakra-ui/react";
import { useMyPosts } from "./useMyPosts";
import EmptyMyPostsList from "./components/emptyMyPostsList/EmptyMyPostsList";
import MyPostListCard from "./components/myPostsListCard/MyPostListCard";

export default function MyPosts() {
  const controller = useMyPosts();

  return (
    <Flex
      direction="column"
      p="10"
      justify="flex-start"
      align="center"
      flex={1}
    >
      <Heading size="lg" mb="8" color="gray.700">
        Minhas postagens
      </Heading>

      {controller.loading && <Spinner />}

      {!controller.posts.length && <EmptyMyPostsList />}

      {controller.posts.map((post) => (
        <MyPostListCard
          key={post.id}
          post={post}
          isDeleting={controller.deletingItemId === post.id}
          onClickEdit={() => controller.handleEditPost(post)}
          onClickDelete={() => controller.handleDeletePost(post)}
        />
      ))}
    </Flex>
  );
}
