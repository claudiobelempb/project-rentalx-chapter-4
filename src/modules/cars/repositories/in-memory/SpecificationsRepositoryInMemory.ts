import { Specification } from "@modules/cars/entities/Specification";
import {
  ISpecificationsRepository,
  ISpecificationsRepositoryDTO,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = [];

  public async index(): Promise<Specification[]> {
    const specifications = this.specifications;
    return specifications;
  }

  public async show(id: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.id === id
    );
    return specification;
  }

  public async create({
    name,
    description,
  }: ISpecificationsRepositoryDTO): Promise<void> {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
    });
    this.specifications.push(specification);
  }

  public async findByName(name: string): Promise<ISpecificationsRepositoryDTO> {
    const category = this.specifications.find((category) => category.name === name);
    return category;
  }

  public async findById(id: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.id === id
    );
    return specification;
  }
}

export { SpecificationsRepositoryInMemory };
