import { inject, injectable } from "tsyringe";

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { User } from "@modules/accounts/infra/typeorm/entities/User";


@injectable()
class IndexUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  public async execute(): Promise<User[] | undefined> {
    const users = await this.usersRepository.index();
    return users;
  }

}

export { IndexUserUseCase }