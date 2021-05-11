import { ICreateStatusDTO } from "../dtos/ICreateStatusDTO";
import { Status } from "../infra/typeorm/entities/Status";

interface IStatusRepository {
  index(): Promise<Status[] | undefined>
  create(data: ICreateStatusDTO): Promise<Status>;
  findByName(name: string): Promise<Status>;
}

export { IStatusRepository };