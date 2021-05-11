import { ICreateStatusDTO } from "@modules/status/dtos/ICreateStatusDTO";
import { Status } from "@modules/status/infra/typeorm/entities/Status";
import { IStatusRepository } from "@modules/status/repositories/IStatusRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateStatusUseCase {

  constructor(
    @inject("StatusRepository")
    private statusRepository: IStatusRepository
  ){}

  async execute({ name }: ICreateStatusDTO): Promise<Status>{
    const statusAlreadyExists = await this.statusRepository.findByName(name);

    if(statusAlreadyExists){
      throw new AppError("Status name already exists.");
    }

    const status = await this.statusRepository.create({ name });

    return status;

  }

}

export { CreateStatusUseCase };