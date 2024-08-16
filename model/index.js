import { Users } from "./Users"
import { Products } from "./Products"
import { connection as db } from "../config/index.js"

const users =  new Users() 
const products = new Products()

export {
    users,
    products
}

