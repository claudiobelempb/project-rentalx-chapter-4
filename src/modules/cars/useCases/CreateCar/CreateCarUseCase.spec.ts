import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "../CreateCar/CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("should be able to create a new car.", async () => {
    const car = await createCarUseCase.execute({
      name: "Name",
      description: "Description",
      daily_rate: 100,
      license_plate: "ABC",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with exists license plate.", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "Description",
        daily_rate: 100,
        license_plate: "ABC",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car2",
        description: "Description",
        daily_rate: 100,
        license_plate: "ABC",
        fine_amount: 60,
        brand: "Brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with available true by default.", async () => {
    const car = await createCarUseCase.execute({
      name: "Car Available",
      description: "Description",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amount: 60,
      brand: "Brand",
      category_id: "category",
    });

    expect(car.availabe).toBe(true);
  });
});
