import { useEffect, useState } from "react";
import { IPost } from "../../domain/interfaces/IPost";
import { useDeletePost } from "../../domain/usecases/useDeletePost";
import { useFetchTeacherPosts } from "../../domain/usecases/useFetchTeacherPosts";
import { useToast } from "@chakra-ui/react";
import { useAuthContext } from "../../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const useMyPosts = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);

  const toast = useToast();

  const { user: teacher } = useAuthContext();

  const { deletePost } = useDeletePost();

  const handleEditPost = (post: IPost) => {
    navigate(`/posts/create?id=${post.id}`);
  };

  const handleDeletePost = async (post: IPost) => {
    if (deletingItemId !== null || !teacher) return;

    try {
      setDeletingItemId(post.id);
      await deletePost(post.id, teacher.id);
      setPosts((oldPosts) =>
        oldPosts.filter((oldPost) => oldPost.id !== post.id)
      );
      toast({
        title: "Post deletado.",
        description: "A postagem foi deletada com sucesso.",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } catch {
      toast({
        title: "Erro ao deletar post.",
        description:
          "Ocorreu um erro ao deletar o post, por favor, tente novamente",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top-right",
      });
    } finally {
      setDeletingItemId(null);
    }
  };

  const updateTeacherPosts = async () => {
    if (!teacher) return;

    setLoading(true);
    const response = await fetchTeacherPosts({ teacherId: teacher.id });
    setPosts(response);
    setLoading(false);
  };

  const { fetchTeacherPosts } = useFetchTeacherPosts();

  useEffect(() => {
    updateTeacherPosts();
  }, [teacher]);

  return { posts, loading, deletingItemId, handleEditPost, handleDeletePost };
};
