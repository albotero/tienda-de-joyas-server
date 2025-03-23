import cors from "cors"
import express from "express"

import envs from "./config/envs.js"
import { resourceNotFoundController } from "./src/api/controllers/notfound.controllers.js"
import tiendaDeJoyasRoutes from "./src/api/routes/tienda-de-joyas.routers.js"

const whiteList = [envs.SERVER_URL, envs.CLIENT_URL]

const app = express()

const corsOptions = {
  credentials: true,
  origin: (origin, callback) =>
    !origin || whiteList.includes(origin) ? callback(null, true) : callback(new Error(`CORS Error: ${origin}`), false),
}

app.use(cors(corsOptions))

app.use(express.json())

app.use("/", tiendaDeJoyasRoutes)
app.use("*", resourceNotFoundController)

app.listen(envs.SERVER_PORT, () => {
  console.log(`Server is UP`)
  console.log(`Listening to Port ${envs.SERVER_PORT}...`)
})
