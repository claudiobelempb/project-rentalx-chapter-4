import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/categories/repositories/ICategoriesRepository";
import { Category } from "@modules/categories/infra/typeorm/entities/Category";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  id: string;
}

@injectable()
class ShowCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoriesRepository
  ) {}

  public async execute({ id }: IRequest): Promise<Category> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError("Category id not found");
    }

    return category;
  }
}

export { ShowCategoryUseCase };
