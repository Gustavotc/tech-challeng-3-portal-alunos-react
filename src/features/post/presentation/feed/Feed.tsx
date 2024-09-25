import { Heading, Spinner, VStack } from "@chakra-ui/react";
import PostCard from "./components/postCard/PostCard";
import { useFeed } from "./useFeed";
import EmptyPostsList from "./components/emptyPostsList/EmptyPostsList";
import SearchInput from "./components/searchInput/SearchInput";

export default function Feed() {
  const controller = useFeed();

  return (
    <VStack
      direction="column"
      p="10"
      justify="flex-start"
      align="center"
      flex={1}
    >
      <Heading size="lg" mb="8" color="gray.700">
        Últimas postagens
      </Heading>

      <SearchInput
        placeholder="Pesquisar post"
        mb={8}
        maxW={450}
        onChangeText={controller.handleSearch}
      />

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
    </VStack>
  );
}
