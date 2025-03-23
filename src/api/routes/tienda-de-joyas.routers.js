import { Router } from "express"

import {
  getJoyaByIdController,
  getJoyasByFilterController,
  getJoyasController,
} from "../controllers/tienda-de-joyas.controllers.js"

const router = Router()

router.get("/joyas", getJoyasController)
router.get("/joyas/joya/:id", getJoyaByIdController)
router.get("/joyas/filtros", getJoyasByFilterController)

export default router
