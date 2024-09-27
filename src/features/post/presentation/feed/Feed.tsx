import { Button, Heading, HStack, Spinner } from "@chakra-ui/react";
import PostCard from "./components/postCard/PostCard";
import { useFeed } from "./useFeed";
import EmptyPostsList from "./components/emptyPostsList/EmptyPostsList";
import SearchInput from "./components/searchInput/SearchInput";
import Page from "../../../../components/page/Page";

export default function Feed() {
  const controller = useFeed();

  return (
    <Page>
      <Heading size="lg" mb="8" color="gray.700">
        Últimas postagens
      </Heading>

      <HStack
        w={{ base: "100%", md: "50%" }}
        justify="center"
        align="center"
        mb={8}
      >
        <SearchInput
          placeholder="Pesquisar post"
          maxW={450}
          onChangeText={controller.handleSearch}
        />

        {controller.isTeacher && (
          <Button colorScheme="orange" onClick={controller.handleCreatePost}>
            Novo post
          </Button>
        )}
      </HStack>
      {controller.loading && <Spinner />}
      {!controller.posts.length && (
        <EmptyPostsList isSearching={!!controller.searchText} />
      )}
      {controller.posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClickReadMore={() => controller.handleReadMoreClick(post)}
        />
      ))}
    </Page>
  );
}
