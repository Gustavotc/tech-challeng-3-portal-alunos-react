import { IPost, IPostJson } from "../../domain/interfaces/IPost";
import Post from "../../domain/models/Post";

export default class PostAdapter {
  toDomain(json: IPostJson): IPost {
    return new Post(
      json.id,
      json.title,
      json.description,
      new Date(json.createAt),
      "", // TODO - Adicionar nome do autor no retorno da API
      json.category
    );
  }
}
