export interface IUser {
  name: string;
  email: string;
  password: string;
  role: {
    id: string;
    type: "DOCENTE" | "DISCENTE";
  };
  id: string;
}
