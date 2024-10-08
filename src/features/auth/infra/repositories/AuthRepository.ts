// AuthRepository.ts
import { IAuthUser } from "../../domain/interfaces/IAuthUser";
import api from "../../../../services/httpClient/api/Api";
import { IAuthRegisterUser } from "../../domain/interfaces/IAuthRegisterUser";
import { IUser } from "../../domain/interfaces/IUser";
import AuthRegisterAdapter from "../adapters/authRegisterAdapter";

export class AuthRepository {
  async login(user: IAuthUser): Promise<IUser> {
    const response = await api.post<IUser>("/auth/login", user);

    if (response.status === 401) {
      throw new Error();
    }

    return response.data;
  }

  async register(user: IAuthRegisterUser): Promise<IUser> {
    const adapter = new AuthRegisterAdapter();
    const body = adapter.toJson(user);

    const response = await api.post<IUser>("/user", body);

    return response.data;
  }
}
