import { Router } from "express"

import {
  getJoyaByIdController,
  getJoyasByFilterController,
  getJoyasController,
} from "../controllers/tienda-de-joyas.controllers.js"
import { joyaIdMiddleware, logsMiddleware } from "../middlewares/tienda-de-joyas.middlewares.js"

const router = Router()

router.get("/joyas", logsMiddleware, getJoyasController)
router.get("/joyas/joya/:id", logsMiddleware, joyaIdMiddleware, getJoyaByIdController)
router.get("/joyas/filtros", logsMiddleware, getJoyasByFilterController)

export default router
