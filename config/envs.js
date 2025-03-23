import dotenv from "dotenv"

const envs = dotenv.config()

export default Object.assign({}, envs.parsed)
