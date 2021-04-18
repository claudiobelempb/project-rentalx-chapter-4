import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICategoriesRepositoryDTO } from "../ICategoriesRepository";


class CategoriesRepositoryInMemory implements ICategoriesRepository {

  categories: Category[] = [];

  public async index(): Promise<Category[]> {
    const categories = this.categories;
    return categories;
  }
  public async show(id: string): Promise<Category> {
    const category = this.categories.find((category => category.id === id));
    return category;
  }
  public async create({ name, description }: ICategoriesRepositoryDTO): Promise<void> {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });
    this.categories.push(category);
  }
  public async findByName(name: string): Promise<ICategoriesRepositoryDTO> {
    const category = this.categories.find((category => category.name === name));
    return category;
  }
  public async findById(id: string): Promise<Category> {
    const category = this.categories.find((category => category.id === id));
    return category;
  }

}

export { CategoriesRepositoryInMemory };