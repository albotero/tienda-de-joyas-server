import { Router } from "express"

import { getJoyaById, getJoyasController } from "../controllers/tienda-de-joyas.controllers.js"

const router = Router()

router.get("/joyas/joya/:id", getJoyaById)
router.get("/joyas", getJoyasController)

export default router
