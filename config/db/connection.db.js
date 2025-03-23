import pg from "pg"
import envs from "../envs.js"

export default new pg.Pool({
  host: envs.DB_HOST,
  user: envs.DB_USER,
  password: envs.DB_PASS,
  database: envs.DB_NAME,
  allowExitOnIdle: true,
})
