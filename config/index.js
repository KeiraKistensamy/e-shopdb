import { createPool } from "mysql2";
import 'dotenv/config.js' // inorder to access all files in .env 
// file you must import dotenv
let connection = createPool ({
    host: process.env.hostDb,
    user: process.env.userDb,
    password: process.env.pwdDb,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30
})
connection.on('connection', (pool) => {
    if(!pool) throw new Error('Couldn\t connect to the database, please try again later')
})
export {
    connection
}