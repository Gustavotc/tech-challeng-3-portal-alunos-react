import { Heading, Spinner } from "@chakra-ui/react";
import { useMyPosts } from "./useMyPosts";
import EmptyMyPostsList from "./components/emptyMyPostsList/EmptyMyPostsList";
import MyPostListCard from "./components/myPostsListCard/MyPostListCard";
import Page from "../../../../components/page/Page";

export default function MyPosts() {
  const controller = useMyPosts();

  return (
    <Page>
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
    </Page>
  );
}
