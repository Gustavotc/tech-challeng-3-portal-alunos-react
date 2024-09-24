import { useEffect, useState } from "react";
import { IPost } from "../../domain/interfaces/IPost";
import { useDeletePost } from "../../domain/usecases/useDeletePost";
import { useFetchTeacherPosts } from "../../domain/usecases/useFetchTeacherPosts";
import { useToast } from "@chakra-ui/react";

export const useMyPosts = () => {
  const [loading, setLoading] = useState(false);
  const [deletingItemId, setDeletingItemId] = useState<string | null>(null);
  const [posts, setPosts] = useState<IPost[]>([]);

  const toast = useToast();

  const teacherId = "5a08aaa2-c14c-4756-bf9e-01865bc2f171";

  const { deletePost } = useDeletePost();

  const handleEditPost = (post: IPost) => {
    console.log("Editar post:", post.id);
  };

  const handleDeletePost = async (post: IPost) => {
    if (deletingItemId !== null) return;

    try {
      setDeletingItemId(post.id);
      await deletePost(post.id, teacherId);
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
    setLoading(true);
    const response = await fetchTeacherPosts({ teacherId });
    setPosts(response);
    setLoading(false);
  };

  const { fetchTeacherPosts } = useFetchTeacherPosts();

  useEffect(() => {
    updateTeacherPosts();
  }, []);

  return { posts, loading, deletingItemId, handleEditPost, handleDeletePost };
};
