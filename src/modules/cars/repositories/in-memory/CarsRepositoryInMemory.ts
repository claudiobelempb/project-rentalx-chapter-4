import { ICarsRepository } from "../ICarsRepository";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];
  
  public async create({
    name,
    description,
    brand,
    daily_rate,
    fine_amount,
    license_plate,
    category_id,
    status_id,
  }: ICreateCarDTO): Promise<Car> {
    const car = new Car();
   
    Object.assign({
      name,
      description,
      brand,
      daily_rate,
      fine_amount,
      license_plate,
      category_id,
      status_id,
    });
  
    this.cars.push(car);


    return car;
  }

  public async findByLicensePlate(license_plate: string): Promise<Car> {
    return this.cars.find((car) => car.license_plate === license_plate);
  }
}

export { CarsRepositoryInMemory };
