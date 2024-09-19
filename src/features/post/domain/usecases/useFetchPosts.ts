import { useState } from "react";
import { IPost } from "../interfaces/IPost";
import PostRepository from "../../infra/repositories/PostRepository";

type IUserFetchPosts = {
  loading: boolean;
  fetchPosts: () => Promise<IPost[]>;
};

export const useFetchPosts = (): IUserFetchPosts => {
  const repository = new PostRepository();
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const postsResponse = await repository.fetchPost();
    setLoading(false);
    return postsResponse;
  };

  return {
    loading,
    fetchPosts,
  };
};
