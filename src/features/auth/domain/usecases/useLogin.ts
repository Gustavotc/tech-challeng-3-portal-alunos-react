import { AuthRepository } from "../../infra/repositories/AuthRepository";

export const useLogin = async (email: string, password: string) => {
  const authRepo = new AuthRepository();
  return await authRepo.login(email, password);
};
