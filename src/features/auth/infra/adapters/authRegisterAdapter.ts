import {
  IAuthRegisterJson,
  IAuthRegisterUser,
} from "./../../domain/interfaces/IAuthRegisterUser";

export default class AuthRegisterAdapter {
  toJson(AuthRegister: IAuthRegisterUser): IAuthRegisterJson {
    return {
      name: AuthRegister.name,
      email: AuthRegister.email,
      password: AuthRegister.password,
      role_id: AuthRegister.roleId,
    };
  }
}
