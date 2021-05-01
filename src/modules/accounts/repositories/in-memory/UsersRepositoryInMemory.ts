import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  public async index(): Promise<User[]> {
    const users = this.users;
    return users;
  }

  public async show(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  public async create({ driver_license, email, password, name }: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      driver_license,
      email,
      password,
      name,
    });
    this.users.push(user);
  }

  public async update(data: ICreateUserDTO): Promise<ICreateUserDTO> {
    throw new Error("Method not implemented.");
  }

  public async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  public async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  public async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}

export { UsersRepositoryInMemory };
