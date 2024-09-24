// AuthRepository.ts
import { IAuthUser } from "../../domain/interfaces/IAuthUser";
import api from "../../../../services/httpClient/api/Api";

export class AuthRepository {
  async login(email: string, password: string): Promise<IAuthUser> {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  }

  async register(email: string, password: string): Promise<IAuthUser> {
    const response = await api.post("/auth/register", { email, password });
    return response.data;
  }
}
