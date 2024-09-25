import { IAuthUser } from "../interfaces/IAuthUser";

export default class AuthUser implements IAuthUser {
  email: string;
  password: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
