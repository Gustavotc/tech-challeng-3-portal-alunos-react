import { useRef, useState } from "react";
import { IPost } from "../../domain/interfaces/IPost";
import { useFetchPosts } from "../../domain/usecases/useFetchPosts";
import { useAuthContext } from "../../../../contexts/AuthContext";
import User from "../../../auth/domain/models/User";
import { useNavigate } from "react-router-dom";

export const useFeed = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

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

  const handleCreatePost = () => {
    navigate("/posts/create");
  };

  const { loading, data: posts } = useFetchPosts({
    searchText,
  });

  return {
    posts,
    loading,
    searchText,
    isTeacher: User.isTeacher(user),
    handleReadMoreClick,
    handleSearch,
    handleCreatePost,
  };
};
