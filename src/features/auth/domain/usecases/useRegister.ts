import { AuthRepository } from "../../infra/repositories/AuthRepository";
import { IAuthRegisterUser } from "../interfaces/IAuthRegisterUser";
import { IUser } from "../interfaces/IUser";

interface IRegister {
  register: (registerUser: IAuthRegisterUser) => Promise<IUser>; // async function to register a user
}

export const useRegister = (): IRegister => {
  const authRepo = new AuthRepository();

  const register = async (registerUser: IAuthRegisterUser): Promise<IUser> => {
    return authRepo.register(registerUser);
  };

  return { register };
};
