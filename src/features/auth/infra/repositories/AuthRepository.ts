// AuthRepository.ts
import { IAuthUser } from "../../domain/interfaces/IAuthUser";
import api from "../../../../services/httpClient/api/Api";
import { IAuthRegisterUser } from "../../domain/interfaces/IAuthRegisterUser";
import { IUser } from "../../domain/interfaces/IUser";
import AuthRegisterAdapter from "../adapters/authRegisterAdapter";

export class AuthRepository {
  async login(email: string, password: string): Promise<IAuthUser> {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  }

  async register(user: IAuthRegisterUser): Promise<IUser> {
    const adapter = new AuthRegisterAdapter();
    const body = adapter.toJson(user);

    const response = await api.post<IUser>("/user", body);

    return response.data;
  }
}
