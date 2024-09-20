import { useRef, useState } from "react";
import { IPost } from "../../domain/interfaces/IPost";
import { useFetchPosts } from "../../domain/usecases/useFetchPosts";

export const useFeed = () => {
  const [searchText, setSearchText] = useState<string | undefined>(undefined);
  const searchTimerRef = useRef<number | undefined>(undefined);

  const handleReadMoreClick = (post: IPost) => {
    console.log("Visualizar detalhes do post:", post.id);
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTimerRef.current !== undefined) {
      clearTimeout(searchTimerRef.current);
    }

    searchTimerRef.current = setTimeout(() => {
      setSearchText(searchTerm);
    }, 500);
  };

  const { loading, data: posts } = useFetchPosts({
    searchText,
  });

  return { posts, loading, searchText, handleReadMoreClick, handleSearch };
};
