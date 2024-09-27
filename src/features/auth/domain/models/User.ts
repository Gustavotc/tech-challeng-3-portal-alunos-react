import { IUser } from "./../interfaces/IUser";

export default class User implements IUser {
  name: string;
  email: string;
  password: string;
  role: { id: string; type: "DOCENTE" | "DISCENTE" };
  id: string;

  constructor(
    name: string,
    email: string,
    password: string,
    role: { id: string; type: "DOCENTE" | "DISCENTE" },
    id: string
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.id = id;
  }

  static isTeacher(user: IUser | null) {
    if (!user) return false;
    return user.role.type === "DOCENTE";
  }
}
