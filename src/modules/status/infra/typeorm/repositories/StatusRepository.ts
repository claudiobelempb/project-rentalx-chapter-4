import { ICreateStatusDTO } from "@modules/status/dtos/ICreateStatusDTO";
import { IStatusRepository } from "@modules/status/repositories/IStatusRepository";
import { getRepository, Repository } from "typeorm";
import { Status } from "../entities/Status";

class StatusRepository implements IStatusRepository {
  private repository: Repository<Status>
  constructor(){
    this.repository = getRepository(Status)
  }
  async index(): Promise<Status[]> {
    const status = this.repository.find();
    return status;
  }

  async create({ name }: ICreateStatusDTO): Promise<Status> {
    const status = this.repository.create({name});
    await this.repository.save(status);
    return status;
  }

  async findByName(name: string): Promise<Status> {
    const status = this.repository.findOne({name});
    return status;
  }

}

export { StatusRepository };