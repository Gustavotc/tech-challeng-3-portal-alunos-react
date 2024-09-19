import { Flex, Heading } from "@chakra-ui/react";
import PostCard from "./components/postCard/PostCard";
import { makePostsList } from "../../domain/mocks/PostMock";
import { IPost } from "../../domain/interfaces/IPost";
import { useEffect, useState } from "react";

const POSTS_MOCK = makePostsList({ length: 10 });

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const handleReadMoreClick = (post: IPost) => {
    console.log("Visualizar detalhes do post:", post.id);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const jsonResponse = await fetch(
        "http://localhost:3000/post?limit=10&page=1"
      );
      const json = await jsonResponse.json();
      console.log(json);
      const postsResponse = json.map((postJson) => {
        return {
          id: postJson.id,
          title: postJson.title,
          description: postJson.description,
          date: new Date(postJson.createAt),
          author: "",
        } as IPost;
      });
      setPosts(postsResponse);
      // const data = await JSON.parse(jsonResponse.json())
    };

    fetchPosts();
  }, []);

  return (
    <Flex direction="column" p="10" justify="center" align="center">
      <Heading size="lg" mb="8" color="gray.700">
        Últimas postagens
      </Heading>

      {/* {POSTS_MOCK.map((item) => (
        <PostCard
          key={item.id}
          post={item}
          onClickReadMore={() => handleReadMoreClick(item)}
        />
      ))} */}

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClickReadMore={() => handleReadMoreClick(post)}
        />
      ))}
    </Flex>
  );
}
