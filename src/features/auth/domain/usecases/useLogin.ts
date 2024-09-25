import { AuthRepository } from "../../infra/repositories/AuthRepository";
import { IAuthUser } from "../interfaces/IAuthUser";

interface ILogin {
  login(auth: IAuthUser): Promise<void>;
}

export const useLogin = (): ILogin => {
  const authRepo = new AuthRepository();

  const login = async (auth: IAuthUser) => {
    authRepo.login(auth.email, auth.password);
  };

  return { login };
};
