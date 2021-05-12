import { Router } from "express";

import { IndexSpecificationController } from "@modules/categories/useCases/indexSpecification/IndexSpecificationController";
import { CreateSpecificationController } from "@modules/categories/useCases/createSpecification/CreateSpecificationController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const specificationRoutes = Router();
specificationRoutes.use(ensureAuthenticated);

const indexSpecificationController = new IndexSpecificationController();
const createSpecificationController = new CreateSpecificationController();

specificationRoutes.get("/", indexSpecificationController.handle);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
