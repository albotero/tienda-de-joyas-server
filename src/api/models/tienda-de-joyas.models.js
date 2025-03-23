import format from "pg-format"
import pool from "../../../config/db/connection.db.js"

const executeQuery = async (sqlQuery) => (await pool.query(sqlQuery))?.rows

export const getJoya = async ({ id }) => {
  const query = format("SELECT * FROM inventario WHERE id = %s", id)
  const response = await executeQuery(query)
  return response
}

const prepareHATEOAS = async (joyas) => {
  const total = joyas.length
  const stock = joyas.reduce((acc, { stock }) => acc + stock, 0)
  const results = joyas.map(({ id, nombre }) => ({ nombre, link: `/joyas/joya/${id}` })).slice(0, 3)
  return { "total-joyas": total, "in-stock": stock, results }
}

export const getJoyas = async ({ limits = 10, page = 1, order_by: orderBy = "stock_DESC" }) => {
  // Prepare args
  const [orderCol, orderDirection] = orderBy.split("_")
  const offset = Math.abs((page - 1) * limits)
  // Build query
  const query = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    orderCol,
    orderDirection,
    limits,
    offset
  )
  // Generate Response
  const joyas = await executeQuery(query)
  const hateoas = await prepareHATEOAS(joyas)
  return hateoas
}
