import { Specification } from '../infra/typeorm/entities/Specification';

interface ISpecificationsRepositoryDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  index(): Promise<Specification[] | undefined>;
  show(id: string): Promise<Specification | undefined>;
  create({ name, description }: ISpecificationsRepositoryDTO): Promise<void>;
  findByName(name: string): Promise<ISpecificationsRepositoryDTO>;
  findById(id: string): Promise<Specification>;
}

export { ISpecificationsRepository, ISpecificationsRepositoryDTO };