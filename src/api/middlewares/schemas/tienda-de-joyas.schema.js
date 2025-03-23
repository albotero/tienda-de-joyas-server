import Joi from "joi"

export const joyaIdSchema = Joi.object({
  id: Joi.number().required(),
})
