import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  // index(): Promise<Car[] | undefined>;
  // show(id: string): Promise<Car>;
  create(data: ICreateCarDTO): Promise<Car>;
  // update({data: ICreateCarDTO}): Promise<ICreateCarDTO>
  // delete(id: string): Promise<void>;

  // findByName(name: string): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  // findById(id: string): Promise<Car>;

}

export { ICarsRepository };
