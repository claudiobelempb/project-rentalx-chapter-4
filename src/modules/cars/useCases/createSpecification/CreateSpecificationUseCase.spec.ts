//import { AppError } from "../../../../shared/errors/AppError";
import { SpecificationsRepositoryInMemory } from "../../repositories/in-memory/SpecificationsRepositoryInMemory";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

let createSpecificationUseCase: CreateSpecificationUseCase;
let specificationsRepositoryInMemory: SpecificationsRepositoryInMemory;

describe("Create specification", () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new SpecificationsRepositoryInMemory();
    createSpecificationUseCase = new CreateSpecificationUseCase(
      specificationsRepositoryInMemory
    );
  });
  it("should be able to create a new specification", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createSpecificationUseCase.execute({
      name: category.name,
      description: category.description,
    });
    const categoryCreate = await specificationsRepositoryInMemory.findByName(
      category.name
    );

    expect(categoryCreate).toHaveProperty("id");
  });
});
