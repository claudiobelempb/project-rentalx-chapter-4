import { ICreateStatusDTO } from "@modules/status/dtos/ICreateStatusDTO";
import { Status } from "@modules/status/infra/typeorm/entities/Status";
import { IStatusRepository } from "../IStatusRepository";

class StatusRepositoryInMemory implements IStatusRepository {
  status: Status[] = [];

  async index(): Promise<Status[]> {
    const status = this.status;
    return status;
  }

  async create({ name }: ICreateStatusDTO): Promise<Status> {
    const status = new Status();
    Object.assign(status, {
      name,
    });
    this.status.push(status);
    return status;
  }

  async findByName(name: string): Promise<Status> {
    return this.status.find((status) => status.name === name);
  }
}

export { StatusRepositoryInMemory };
