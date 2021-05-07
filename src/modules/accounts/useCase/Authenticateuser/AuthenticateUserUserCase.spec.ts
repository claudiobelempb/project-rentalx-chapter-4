import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { AuthenticateUserUseCase } from "@modules/accounts/useCase/Authenticateuser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "@modules/accounts/useCase/CreateUser/CreateUserUseCase";
import { AppError } from "@shared/errors/AppError";

let authenticateUserCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createCategoryUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createCategoryUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
  });
  it("should be to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "000123",
      email: "user@test.com",
      password: "123",
      name: "user test",
    };
    await createCategoryUseCase.execute(user);
    const result = await authenticateUserCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });
  
  it("should not be able to authenticate an nonexistent user", () => {
    expect(async () => {
      await authenticateUserCase.execute({
        email: "user@test.com",
        password: "123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "999",
        email: "user@user.com",
        password: "1234",
        name: "user test error",
      };

      await createCategoryUseCase.execute(user);

      await authenticateUserCase.execute({
        email: user.email,
        password: "incorrectPassword",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
