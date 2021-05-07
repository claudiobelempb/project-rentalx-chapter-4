import { Router } from "express";
import { CreateCarController } from "@modules/cars/useCases/CreateCar/CreateCarController";

const carsRoutes = Router();
const createCarController = new CreateCarController();

carsRoutes.post("/", createCarController.handle);
carsRoutes.get("/", (request, response) => {
  return response.json({ message: "ok2" });
});

export { carsRoutes };
