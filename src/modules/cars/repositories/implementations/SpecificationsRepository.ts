import { EntityRepository, getRepository, Repository } from "typeorm";

import { Specification } from "@modules/cars/entities/Specification";
import {
  ISpecificationsRepository,
  ISpecificationsRepositoryDTO,
} from "@modules/cars/repositories/ISpecificationsRepository";

@EntityRepository(Specification)
class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  public async index(): Promise<Specification[]> {
    const specification = await this.repository.find();
    return specification;
  }

  public async show(id: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({id});
    return specification;
  }

  public async create({
    name,
    description,
  }: ISpecificationsRepositoryDTO): Promise<void> {
  
    const specification = this.repository.create({
      name, 
      description,
    })

    await this.repository.save(specification);

  }

  public async findByName(name: string): Promise<ISpecificationsRepositoryDTO> {
    const specificationNameExists = this.repository.findOne({name});
    return specificationNameExists;
  }

  public async findById(id: string): Promise<Specification> {
    const specificationIdExists = this.repository.findOne({id});
    return specificationIdExists;
  }
}

export { SpecificationsRepository };
