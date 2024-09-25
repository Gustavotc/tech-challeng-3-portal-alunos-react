export interface IAuthRegisterUser {
  name: string;
  email: string;
  password: string;
  roleId: "DOCENTE" | "DISCENTE";
}

export interface IAuthRegisterJson {
  name: string;
  email: string;
  password: string;
  role_id: "DOCENTE" | "DISCENTE";
}
