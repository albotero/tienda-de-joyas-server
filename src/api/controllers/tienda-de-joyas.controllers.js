import { getJoya, getJoyas } from "../models/tienda-de-joyas.models.js"

const execute = async ({ res, okCode, callback, args }) => {
  try {
    const result = await callback(args)
    res.status(okCode).json(result)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getJoyasController = (req, res) =>
  execute({
    res,
    okCode: 200,
    callback: getJoyas,
    args: req.query,
  })

export const getJoyaById = (req, res) =>
  execute({
    res,
    okCode: 200,
    callback: getJoya,
    args: req.params,
  })
