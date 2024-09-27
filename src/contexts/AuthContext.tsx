/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { IUser } from "../features/auth/domain/interfaces/IUser";

type IAuthContext = {
  user: IUser | null;
  updateAuthUser: (user: IUser | null) => void;
};

type IAuthProviderProps = React.PropsWithChildren;

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUser | null>(null);

  const updateAuthUser = (user: IUser | null) => {
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, updateAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext(): IAuthContext {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de um AuthProvider");
  }

  return context;
}
