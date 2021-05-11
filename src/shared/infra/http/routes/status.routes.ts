import { Router } from "express";
import { CreateStatusController } from "@modules/status/useCase/CreateStatus/CreateStatusController";

const statusRoutes = Router();
const createStatusController = new CreateStatusController();

statusRoutes.post("/", createStatusController.handle);

export { statusRoutes };