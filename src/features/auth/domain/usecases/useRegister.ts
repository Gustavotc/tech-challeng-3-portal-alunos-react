import { AuthRepository } from "../../infra/repositories/AuthRepository";

export const useRegister = async (email: string, password: string) => {
  const authRepo = new AuthRepository();
  return await authRepo.register(email, password);
};
