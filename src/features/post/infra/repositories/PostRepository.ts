import api from "../../../../services/httpClient/api/Api";
import { IPost, IPostJson } from "../../domain/interfaces/IPost";
import { IFetchPostsParams } from "../../domain/usecases/useFetchPosts";
import PostAdapter from "../adapters/PostAdapter";

export default class PostRepository {
  async fetchPost({ searchText }: IFetchPostsParams): Promise<IPost[]> {
    let endpoint = "/post";
    let query = "?limit=10&page=1";

    if (searchText) {
      endpoint += `/search`;
      query = `?text=${searchText}`;
    }

    try {
      const postsResponse = await api.get<IPostJson[]>(`${endpoint}${query}`);
      const adapter = new PostAdapter();
      return postsResponse.data.map(adapter.toDomain);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
