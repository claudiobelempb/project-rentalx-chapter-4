import { StatusRepositoryInMemory } from "@modules/status/repositories/in-memory/StatusRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateStatusUseCase } from "./CreateStatusUseCase";

let createStatusUseCase: CreateStatusUseCase;
let statusRepositoryInMemory: StatusRepositoryInMemory;

describe("Create new status", () => {
  beforeEach(() => {
    statusRepositoryInMemory = new StatusRepositoryInMemory();
    createStatusUseCase = new CreateStatusUseCase(statusRepositoryInMemory);
  });

  it("should be able to create a new status", async () => {
    const status = await createStatusUseCase.execute({name: "Name status"});
    expect(status).toHaveProperty("id");
  });

  it("should not be able to create status with exists name", () => {
    expect(async () => {
      await createStatusUseCase.execute({name: "status1"});

      await createStatusUseCase.execute({name: "status2"});
      
    }).rejects.toBeInstanceOf(AppError);
  })
});

