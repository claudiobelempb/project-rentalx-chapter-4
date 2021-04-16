import { injectable, inject } from "tsyringe";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class DeleteUserUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ){}

  public async execute({ id }: IRequest): Promise<void>{
    const user = await this.usersRepository.findById(id);

    if(!user){
      throw new AppError("User id not found.");
    }

    await this.usersRepository.delete(id);
  }
}

export { DeleteUserUseCase };