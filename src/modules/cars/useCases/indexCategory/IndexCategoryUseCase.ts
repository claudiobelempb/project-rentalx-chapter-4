import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "@modules/cars/entities/Category";

@injectable()
class IndexCategoryUserCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute(): Promise<Category[] | undefined> {
    const categories = await this.categoryRepository.index();

    return categories;
  }
}

export { IndexCategoryUserCase };
