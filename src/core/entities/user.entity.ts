export type CreateUserEntityDTO = {
  id: string;
  username: string;
  password?: string;
  email: string;
  isAdmin: boolean;
  name: string;
};

export class UserEntity {
  id: string;
  username: string;
  password?: string;
  email: string;
  isAdmin: boolean;
  name: string;

  static build({
    id,
    email,
    username,
    password,
    isAdmin,
    name,
  }: CreateUserEntityDTO): UserEntity {
    return Object.assign(new UserEntity(), {
      id,
      name,
      email,
      username,
      password,
      isAdmin,
    });
  }
}
