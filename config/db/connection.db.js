import pg from "pg"
import envs from "../envs.js"

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = envs

export default new pg.Pool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  allowExitOnIdle: true,
})
