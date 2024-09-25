import { AuthRepository } from "../../infra/repositories/AuthRepository";
import { IAuthRegisterUser } from "../interfaces/IAuthRegisterUser";

interface IRegister {
  register: (registerUser: IAuthRegisterUser) => Promise<void>; // async function to register a user
}

export const useRegister = (): IRegister => {
  const authRepo = new AuthRepository();

  const register = async (registerUser: IAuthRegisterUser) => {
    await authRepo.register(registerUser);
  };

  return { register };
};
