import { AppError } from "@shared/errors/AppError";
import { SpecificationsRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationsRepositoryInMemory";
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
    const specification = {
      name: "Category Test",
      description: "Category description Test",
    };
    await createSpecificationUseCase.execute({
      name: specification.name,
      description: specification.description,
    });
    const categoryCreate = await specificationsRepositoryInMemory.findByName(
      specification.name
    );

    expect(categoryCreate).toHaveProperty("id");
  });

  it("should not be able to create specification a new specification with name exists", async () => {
    expect(async () => {
      const specification = {
        name: "Category Test",
        description: "Category description Test",
      };
      await createSpecificationUseCase.execute({
        name: specification.name,
        description: specification.description,
      });
      await createSpecificationUseCase.execute({
        name: specification.name,
        description: specification.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
