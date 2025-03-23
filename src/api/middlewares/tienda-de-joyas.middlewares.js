import { joyaIdSchema } from "./schemas/tienda-de-joyas.schema.js"

export const logsMiddleware = (req, _, next) => {
  const { method, originalUrl } = req
  const datetime = new Date()
  console.log(datetime, method, originalUrl)
  next()
}

export const joyaIdMiddleware = (req, res, next) => {
  const { error } = joyaIdSchema.validate(req.params)
  if (error) {
    const errorMessage = error.details.map(({ message }) => message)
    res.status(400).json(errorMessage)
  } else next()
}
