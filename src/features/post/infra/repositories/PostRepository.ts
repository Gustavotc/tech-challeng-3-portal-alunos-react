import api from "../../../../services/httpClient/api/Api";
import { IPost, IPostJson } from "../../domain/interfaces/IPost";
import PostAdapter from "../adapters/PostAdapter";

export default class PostRepository {
  async fetchPost(): Promise<IPost[]> {
    try {
      const postsResponse = await api.get<IPostJson[]>("/post?limit=10&page=1");
      const adapter = new PostAdapter();
      return postsResponse.data.map(adapter.toDomain);
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
