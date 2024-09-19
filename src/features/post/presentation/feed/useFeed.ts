import { useState, useEffect } from "react";
import { IPost } from "../../domain/interfaces/IPost";
import { useFetchPosts } from "../../domain/usecases/useFetchPosts";

export const useFeed = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleReadMoreClick = (post: IPost) => {
    console.log("Visualizar detalhes do post:", post.id);
  };

  const { loading, fetchPosts } = useFetchPosts();

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };

    fetchInitialPosts();
  }, []);

  return { posts, loading, handleReadMoreClick };
};
