import { AuthRepository } from "../../infra/repositories/AuthRepository";
import { IAuthUser } from "../interfaces/IAuthUser";
import { IUser } from "../interfaces/IUser";

interface ILogin {
  login(auth: IAuthUser): Promise<IUser>;
}

export const useLogin = (): ILogin => {
  const authRepo = new AuthRepository();

  const login = async (auth: IAuthUser): Promise<IUser> => {
    return authRepo.login(auth);
  };

  return { login };
};
