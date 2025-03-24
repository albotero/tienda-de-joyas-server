import dotenv from "dotenv"

const { parsed } = dotenv.config()

export default Object.assign({}, parsed)
